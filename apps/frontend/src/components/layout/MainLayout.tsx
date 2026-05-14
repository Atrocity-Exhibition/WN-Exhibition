import { ReactNode } from "react"

import Navbar from "@/components/layout/Navbar"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {children}
      </main>
    </div>
  )
}
