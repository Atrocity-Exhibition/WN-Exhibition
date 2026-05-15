import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import MainLayout from "@/components/layout/MainLayout"

import { supabase } from "@/lib/supabase"

export default function NovelPage() {
  const { slug } = useParams()

  const [novel, setNovel] = useState<any>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNovel() {
      const { data, error } = await supabase
        .from("novels")
        .select(`
          *,
          novel_authors(
            authors(
              name
            )
          ),
          novel_genres(
            genres(
              name
            )
          )
        `)
        .eq("slug", slug)
        .single()

      console.log(data)
      console.log(error)

      if (!error) {
        setNovel(data)
      }

      setLoading(false)
    }

    fetchNovel()
  }, [slug])

  if (loading) {
    return (
      <MainLayout>
        <div className="p-10">
          Loading...
        </div>
      </MainLayout>
    )
  }

  if (!novel) {
    return (
      <MainLayout>
        <div className="p-10">
          Novel not found.
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[300px_1fr]">
          <div>
            <img
              src={novel.cover_url}
              alt={novel.title}
              className="rounded-2xl"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              {novel.title}
            </h1>

            <p className="mt-4 text-lg text-zinc-400">
              By{" "}
              {
                novel.novel_authors?.[0]
                  ?.authors?.name
              }
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-zinc-400">
              <span>
                {novel.original_language}
              </span>

              <span>
                {novel.status}
              </span>

              <span>
                {novel.chapter_count} chapters
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {novel.novel_genres?.map(
                (item: any) => (
                  <span
                    key={item.genres.name}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                  >
                    {item.genres.name}
                  </span>
                )
              )}
            </div>

            <p className="mt-8 whitespace-pre-wrap text-lg leading-8 text-zinc-300">
              {novel.description}
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
