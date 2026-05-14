import type { Novel } from "@/types/novel"

import NovelCard from "./NovelCard"

interface NovelGridProps {
  novels: Novel[]
}

export default function NovelGrid({
  novels,
}: NovelGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {novels.map((novel) => (
        <NovelCard
          key={novel.id}
          novel={novel}
        />
      ))}
    </div>
  )
}
