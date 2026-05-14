import scrapy


class NovelUpdatesSpider(scrapy.Spider):
    name = "novelupdates"

    start_urls = [
        "https://www.novelupdates.com/series-ranking/"
    ]

    def parse(self, response):
        novels = response.css(".search_main_box_nu")

        for novel in novels:
            yield {
                "title": novel.css(
                    ".search_title a::text"
                ).get(),

                "url": novel.css(
                    ".search_title a::attr(href)"
                ).get(),
            }
