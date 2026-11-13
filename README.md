# IP Address Tracker

An IP address tracker built as a solution to a [Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) challenge, using the [IPify Geolocation API](https://geo.ipify.org/) for location data and [Leaflet](https://leafletjs.com/) to display it on a map.

## Overview

When the page opens, the app detects your own IP address and shows its location on the map. You can then search for any IP address or domain to see its key details and where it sits in the world.


## Features

- Shows your own IP address and location automatically on page load
- Search any IPv4 address, IPv6 address, or domain name
- Displays the IP address, location, timezone, and ISP in an info card
- Interactive map with a custom marker that moves to each searched location
- Loading state on first load and a clear error message for invalid searches
- Previous result stays visible (dimmed) while a new search loads
- Searched results are cached, so repeating a search doesn't use extra API credits
- Responsive layout based on the provided mobile and desktop designs
- Hover and focus states on all interactive elements
- Built with strict TypeScript typing throughout

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand.docs.pmnd.rs/) for the search state
- [TanStack Query](https://tanstack.com/query) for data fetching and caching
- [Leaflet](https://leafletjs.com/) and [React Leaflet](https://react-leaflet.js.org/) for the map
- [IPify Geolocation API](https://geo.ipify.org/)

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Zikra-S/IP-address-tracker.git
cd IP-address-tracker
pnpm install
```

Get a free API key from [geo.ipify.org](https://geo.ipify.org/), then create your environment file:

```bash
cp .env.example .env
```

Open `.env` and add your key:

```
VITE_IPIFY_KEY=your_key_here
```

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── api/
│   └── ipify.ts         # Fetches IP data from the IPify API
├── assets/images/       # Header patterns, arrow icon, and map marker
├── components/
│   ├── header.tsx       # Banner with the title and search bar slot
│   ├── searchBar.tsx    # Search input and submit button
│   ├── infoCard.tsx     # IP, location, timezone, and ISP details
│   └── map.tsx          # Leaflet map with a custom marker
├── hooks/
│   ├── useSearch.ts     # Zustand store holding the search term
│   └── useIpData.ts     # TanStack Query hook that fetches the data
├── types/
│   └── ip.ts            # TypeScript type for the API response
├── App.tsx              # Page layout and loading and error states
├── index.css            # Tailwind import, font, and color tokens
└── main.tsx             # App entry point with the query provider
```

## What I Learned

This project was my first time combining several libraries in one React app:

- Managing shared state with Zustand and how it differs from the Context API
- Fetching and caching server data with TanStack Query, including query keys and automatic refetching
- Handling loading and error states without writing `useEffect` and `useState` by hand
- Rendering an interactive map with Leaflet and moving it when the location changes
- Calling an API with a key and keeping that key out of Git using environment variables
- Removing a leaked secret from the full Git history with `git filter-repo`
- Writing clear commit messages with the Conventional Commits format
- Building a responsive layout with Tailwind from a mobile and desktop design