from wn_scraper.db import supabase


class WNScraperPipeline:
    def process_item(self, item, spider):

        novel_data = {
            "slug": item["slug"],
            "title": item["title"],
            "description": item["description"],
            "cover_url": item["cover"],
            "original_language": item["language"],
            "status": item["status"],
            "chapter_count": item["chapter_count"],
        }

        novel_response = (
            supabase
            .table("novels")
            .upsert(
                novel_data,
                on_conflict="slug"
            )
            .execute()
        )

        novel = novel_response.data[0]

        novel_id = novel["id"]

        author_name = item.get("author")

        if author_name:
            author_response = (
                supabase
                .table("authors")
                .upsert(
                    {
                        "name": author_name
                    },
                    on_conflict="name"
                )
                .execute()
            )

            author = author_response.data[0]

            supabase.table(
                "novel_authors"
            ).upsert(
                {
                    "novel_id": novel_id,
                    "author_id": author["id"]
                }
            ).execute()

        for genre_name in item.get("genres", []):

            genre_response = (
                supabase
                .table("genres")
                .upsert(
                    {
                        "name": genre_name
                    },
                    on_conflict="name"
                )
                .execute()
            )

            genre = genre_response.data[0]

            supabase.table(
                "novel_genres"
            ).upsert(
                {
                    "novel_id": novel_id,
                    "genre_id": genre["id"]
                }
            ).execute()

        return item
