import scrapy
import requests


class VanguardLinks(scrapy.Spider):
    name = "vanguard_links"
    start_urls = [
        'https://www.vanguardngr.com/news/'
    ]

    def parse(self, response):
        for link in response.css('.entry-title a::attr(href)').getall():
            requests.post('http://127.0.0.1:8000/api/links/vanguard/', data={"name": link})


