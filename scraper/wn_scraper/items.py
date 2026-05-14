import scrapy


class NovelItem(scrapy.Item):
    slug = scrapy.Field()

    title = scrapy.Field()

    url = scrapy.Field()

    cover = scrapy.Field()

    author = scrapy.Field()

    translator = scrapy.Field()

    description = scrapy.Field()

    genres = scrapy.Field()

    status = scrapy.Field()

    language = scrapy.Field()

    chapter_count = scrapy.Field()
