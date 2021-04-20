import scrapy
import requests

baseUrl = 'http://127.0.0.1:8000/api/links'


class PunchLink(scrapy.Spider):
    name = 'punch_links'
    start_urls = [
        'https://punchng.com/topics/news/'
    ]

    def parse(self, response):
        for k in response.css('.entry-thumbnail-wrapper::attr(href)').getall():
            requests.post(f'{baseUrl}/punch/', data={'name': k})


# class PunchScrapy(scrapy.Spider):
#     name = 'punch_news'
#     star_urls = requests.get('http://127.0.0.1:8000/api/links/punch/')
#
#     def parse(self, response, **kwargs):
