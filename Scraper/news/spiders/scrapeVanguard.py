import scrapy
import requests
from slugify import slugify
import re


baseUrl = 'http://127.0.0.1:8000/api/links/vanguard/'
links = requests.get(baseUrl)
result = links.json()
vanguardLinks = []
for index in result['results']:
    vanguardLinks.append(index['name'])


class ScrapeVanguard(scrapy.Spider):
    name = "scrape_vanguard"
    start_urls = vanguardLinks
    # done = False

    def parse(self, response):
        content = ''
        title = response.css('.entry-title::text').get()
        image = response.css('.entry-content img::attr(src)').get()
        paragraphs = response.css('.entry-content p::text').getall()
        for paragraph in paragraphs:
            content += paragraph + '\n'
        # done = True

        req = requests.post("http://127.0.0.1:8000/api/news/", data={
            "image": image,
            "title": title,
            "slug": slugify(title, to_lower=True),
            "content": content,
            "source": "The Vanguard",
            "category": 81
        })
