import { Link } from "react-router-dom"

import { Input } from "@/components/ui/input"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        <Link
          to="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-white"
        >
          WN-Exhibition
        </Link>

        <div className="hidden flex-1 md:block">
          <Input
            placeholder="Search novels..."
            className="border-zinc-700 bg-zinc-900"
          />
        </div>

        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <Link
            to="/"
            className="transition-colors hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/search"
            className="transition-colors hover:text-white"
          >
            Search
          </Link>
        </nav>
      </div>
    </header>
  )
}
