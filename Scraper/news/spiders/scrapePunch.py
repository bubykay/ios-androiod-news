import requests
import scrapy
from slugify import slugify


baseUrl = 'http://127.0.0.1:8000/api/links/punch/'
links = requests.get(baseUrl)
result = links.json()
punchLinks = []
for index in result['results']:
    punchLinks.append(index['name'])


class ScrapePunch(scrapy.Spider):
    name = 'scrape_punch'
    start_urls = punchLinks

    def parse(self, response):
        p = ''
        image = response.css('.entry-featured-image').css('img::attr(src)').get()
        title = response.css('.entry-title::text').get()
        body = response.css('.entry-content p::text').getall()
        slug = slugify(title, to_lower=True)
        for paragraph in body:
            p += f'{paragraph} \n'
        requests.post("http://127.0.0.1:8000/api/news/", data={
            "image": image,
            "title": title,
            "slug": slug,
            "content": p,
            "source": "The Punch",
            "category": 81
        })
