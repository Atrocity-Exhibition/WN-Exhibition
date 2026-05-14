import MainLayout from "@/components/layout/MainLayout"

export default function HomePage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold tracking-tight">
            Discover Your Next Obsession
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Track, rate, review, and explore web novels from every genre.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold">
            Trending Novels
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-[3/4] rounded-2xl border border-zinc-800 bg-zinc-900"
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
