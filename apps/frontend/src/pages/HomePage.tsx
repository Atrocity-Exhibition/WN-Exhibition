import { useEffect, useState } from "react"

import MainLayout from "@/components/layout/MainLayout"
import NovelGrid from "@/components/novels/NovelGrid"

import { supabase } from "@/lib/supabase"

export default function HomePage() {
  const [novels, setNovels] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNovels() {
      const { data, error } = await supabase
        .from("novels")
        .select("*")
        .limit(20)

      if (error) {
        console.error(error)
      } else {
        console.log(data)
        setNovels(data || [])
      }

      setLoading(false)
    }

    fetchNovels()
  }, [])

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold tracking-tight">
            Discover Your Next Obsession
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Track, rate, review, and explore web novels
            from every genre.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold">
            Trending Novels
          </h2>

          <div className="mt-6">
            {loading ? (
              <p className="text-zinc-500">
                Loading novels...
              </p>
            ) : (
              <NovelGrid novels={novels} />
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
