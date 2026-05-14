# WN-Exhibition

A full-stack web novel discovery platform inspired by sites like NovelUpdates and MAL.

## Features

- Discover web novels
- Scrape metadata from sources like Wuxiaworld
- Store normalized data in Supabase
- Browse novels in a modern React frontend
- Relational database architecture
- Genre and author linking

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui

### Backend / Data
- Scrapy
- Supabase
- PostgreSQL

## Project Structure

webnovel-site/
├── apps/
│   └── frontend/
├── scraper/
├── database/
├── docs/

## Current Progress

- [x] React frontend setup
- [x] Tailwind + shadcn/ui
- [x] Supabase integration
- [x] Wuxiaworld scraper
- [x] Automated ingestion pipeline
- [x] Novel cards rendering from DB
- [ ] Novel detail pages
- [ ] Search system
- [ ] Ratings & reviews
- [ ] Authentication

## Development

### Frontend

cd apps/frontend
npm install
npm run dev

### Scraper

cd scraper

source .venv/bin/activate

scrapy crawl wuxiaworld

## Environment Variables

### Frontend

apps/frontend/.env.local

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

### Scraper

scraper/.env

SUPABASE_URL=
SUPABASE_KEY=

## Vision

WN-Exhibition aims to become a modern web novel tracking and discovery platform with:
- ratings
- reviews
- recommendation systems
- personalized libraries
- advanced filtering
- multi-source aggregation
