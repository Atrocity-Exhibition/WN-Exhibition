import type { Novel } from "@/types/novel"

export const novels: Novel[] = [
  {
    id: 1,
    slug: "lord-of-the-mysteries",
    title: "Lord of the Mysteries",
    coverUrl:
      "https://static.wikia.nocookie.net/lord-of-the-mystery/images/6/65/LOTM_Cover.jpg",
    rating: 9.7,
    year: 2018,
    genres: ["Mystery", "Fantasy", "Supernatural"],
  },

  {
    id: 2,
    slug: "shadow-slave",
    title: "Shadow Slave",
    coverUrl:
      "https://m.media-amazon.com/images/I/81UFxQ4A7hL.jpg",
    rating: 9.5,
    year: 2022,
    genres: ["Fantasy", "Action"],
  },

  {
    id: 3,
    slug: "the-wandering-inn",
    title: "The Wandering Inn",
    coverUrl:
      "https://m.media-amazon.com/images/I/91xZ4M7-3-L.jpg",
    rating: 9.3,
    year: 2017,
    genres: ["Fantasy", "Adventure"],
  },

  {
    id: 4,
    slug: "reverend-insanity",
    title: "Reverend Insanity",
    coverUrl:
      "https://m.media-amazon.com/images/I/71vA1+4n3UL.jpg",
    rating: 9.6,
    year: 2012,
    genres: ["Dark Fantasy", "Cultivation"],
  },
]
