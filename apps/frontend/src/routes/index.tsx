import { createBrowserRouter } from "react-router-dom"

import HomePage from "@/pages/HomePage"
import NovelPage from "@/pages/NovelPage"
import SearchPage from "@/pages/SearchPage"
import NotFoundPage from "@/pages/NotFoundPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/novel/:slug",
    element: <NovelPage />,
  },

  {
    path: "/search",
    element: <SearchPage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
])
