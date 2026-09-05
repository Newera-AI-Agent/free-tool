# Free Tool

A standalone, client-side collection of small browser utilities for everyday digital work. Input is processed in the browser and is not sent to a server.

## Scripts

- `npm install` — install dependencies
- `npm run dev` — start the Vite development server
- `npm run build` — type-check and create the static `dist/` bundle
- `npm run test` — run configured Vitest tests

## Architecture

The app is a React + TypeScript single-page application built with Vite. `src/App.tsx` owns the directory, selected tool, search/filter state, and local favorites persistence. `src/styles.css` contains the responsive paper-and-ink design tokens and component styles. Vite is configured with a relative base path so the generated `dist/` folder can be hosted as static files.

## Notes and limitations

The utilities are intentionally local-first and require no backend, accounts, or external service. Browser support is required for clipboard, Web Crypto, and UUID APIs where those features are used. Favorites use `localStorage` when available and continue to work without persistence if storage is blocked. The current collection focuses on lightweight text, encoding, formatting, conversion, and inspection tasks.
