# B&G Gaming

A multi-page React gaming website with individual profile pages for B and G.

## Stack
- Vite + React 18 + react-router-dom
- No backend, no database, no external services

## Development
```sh
docker compose -f docker-compose.base44.yml up -d
```
App is served on port 3000. Dependencies install on first boot via `npm install` inside the container.

## Editing profiles
Profile data lives in `src/data/profiles.js` — edit the array entries to change names, bios, games, and stats.
