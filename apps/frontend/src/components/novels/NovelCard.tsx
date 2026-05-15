import { Link } from "react-router-dom"

import { Star } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Badge,
} from "@/components/ui/badge"

type Novel = {
  id?: number

  slug: string

  title: string

  cover_url?: string

  description?: string

  status?: string

  original_language?: string

  average_rating?: number

  genres?: string[]
}

interface NovelCardProps {
  novel: Novel
}

export default function NovelCard({
  novel,
}: NovelCardProps) {
  return (
    <Link to={`/novel/${novel.slug}`}>
      <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition hover:border-zinc-700 hover:bg-zinc-800">
        <div className="aspect-[3/4] overflow-hidden bg-zinc-800">
          {novel.cover_url ? (
            <img
              src={novel.cover_url}
              alt={novel.title}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-500">
              No Cover
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <h3 className="line-clamp-1 text-lg font-semibold">
            {novel.title}
          </h3>

          {novel.original_language && (
            <p className="mt-1 text-sm text-zinc-500">
              {novel.original_language}
            </p>
          )}

          {novel.description && (
            <p className="mt-3 line-clamp-3 text-sm text-zinc-400">
              {novel.description}
            </p>
          )}

          {novel.genres?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {novel.genres.map((genre) => (
                <Badge
                  key={genre}
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300"
                >
                  {genre}
                </Badge>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex items-center justify-between">
            {novel.status && (
              <span className="text-sm text-zinc-400">
                {novel.status}
              </span>
            )}

            {novel.average_rating && (
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="h-4 w-4 fill-yellow-400" />

                <span className="text-sm font-medium">
                  {novel.average_rating}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
