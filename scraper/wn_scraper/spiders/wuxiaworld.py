import json

import re

import html

import scrapy

from wn_scraper.items import NovelItem


class WuxiaWorldSpider(scrapy.Spider):
    name = "wuxiaworld"

    allowed_domains = [
        "wuxiaworld.com"
    ]

    start_urls = [
        "https://www.wuxiaworld.com/novels"
    ]

    custom_settings = {
        "DOWNLOAD_DELAY": 2,
    }

    def parse(self, response):
        novels = response.css(
            'a[href*="/novel/"]'
        )

        seen = set()

        for novel in novels:
            url = novel.css(
                "::attr(href)"
            ).get()

            title = novel.css(
                "img::attr(alt)"
            ).get()

            cover = novel.css(
                "img::attr(src)"
            ).get()

            if not url or not title:
                continue

            if "/chapter-" in url:
                continue

            if url in seen:
                continue

            seen.add(url)

            yield response.follow(
                url,
                callback=self.parse_novel,
                meta={
                    "title": title.strip(),
                    "cover": cover,
                }
            )

        next_page = response.css(
            'a[href*="page="]::attr(href)'
        ).get()

        if next_page:
            yield response.follow(
                next_page,
                callback=self.parse
            )

    def parse_novel(self, response):
        title = response.meta["title"]

        cover = response.meta["cover"]

        slug = response.url.split("/")[-1]

        json_ld_blocks = response.css(
            'script[type="application/ld+json"]::text'
        ).getall()

        author = None

        description = None

        for block in json_ld_blocks:
            try:
                data = json.loads(block)

                if data.get("@type") == "Book":
                    author = (
                        data.get("author", {})
                        .get("name", "")
                        .strip()
                    )

                if data.get("@type") == "Product":
                    description = data.get(
                        "description"
                    )

            except Exception:
                continue

        if description:
            description = html.unescape(description)

            description = (
                description
                .replace("\n", " ")
                .replace("\r", " ")
                .replace("\t", " ")
                .replace("\xa0", " ")
                .strip()
            )

            description = re.sub(
                r"\s+",
                " ",
                description
            ) 

        genres = [
            genre.strip()
            for genre in response.css(
                'a[href*="/novels/?genre="] *::text'
            ).getall()
            if genre.strip()
        ]

        visible_text = [
            text.strip()
            for text in response.css(
                "*::text"
            ).getall()
            if text.strip()
        ]

        translator = None

        status = None

        language = None

        chapter_count = None

        for index, text in enumerate(visible_text):
            if text == "Translator:":
                if index + 1 < len(visible_text):
                    translator = visible_text[index + 1]

            if text in [
                "Ongoing",
                "Completed",
                "Hiatus",
                "Dropped",
            ]:
                status = text

            if text in [
                "Chinese",
                "Korean",
                "Japanese",
                "English",
            ]:
                language = text

            if "Chapters" in text:

                match = re.search(
                    r"(\d+)\s+Chapters",
                    text
                )

                if match:
                    chapter_count = int(
                        match.group(1)
                    )

        yield NovelItem(
            slug=slug,

            title=title,

            url=response.url,

            cover=cover,

            author=author,

            translator=translator,

            description=description,

            genres=genres,

            status=status,

            language=language,

            chapter_count=chapter_count,
        )
