# South Asian Street Food Knowledge Graph

An interactive web app for exploring iconic street foods from India, Pakistan, and Bangladesh — powered by a SPARQL knowledge graph hosted on TriplyDB.

## Live Demo

> Deploy via GitHub Pages from the `main` branch (`/ root`).

## Features

- **Dish Explorer** — browse 16 street foods with photos, spice level, prep time, and country of origin
- **Recipe Modal** — per-dish deep dive: ingredient sets with culinary base names, cooking techniques, assembly steps, and regional variants
- **Culinary Bases Tab** — explore shared ingredient bases (e.g. tamarind chutney, spiced potato filling) across dishes
- **Smart Filters** — filter by country, dietary preference (vegetarian 🥕), prep time (≤30 / 30–60 / >60 min), and cooking methods
- **Ingredient Search** — query the KG for dishes sharing specific ingredients
- **Interactive Map** — Leaflet.js map pinpointing dish origins
- **Scroll Animations** — GSAP + ScrollTrigger driven hero and section transitions
- **Dark/Light Theme** — full theme toggle

## Tech Stack

| Layer | Tool |
|---|---|
| Knowledge Graph | [TriplyDB](https://triplydb.com) — SPARQL endpoint |
| Frontend | Vanilla HTML / CSS / JavaScript |
| Animations | GSAP 3 + ScrollTrigger |
| Map | Leaflet.js |
| Fonts | Google Fonts (Cormorant Garamond, Lora, DM Sans) |

## Project Structure

```
south-asian-street-food-kg/
├── index.html        # Single-page app shell
├── css/
│   └── styles.css    # All styles + theme variables
├── js/
│   └── main.js       # SPARQL queries, UI logic, filters
└── images/           # Dish photos + logo
```

## SPARQL Endpoint

All dish data is fetched live from:

```
https://api.triplydb.com/datasets/Areesha/South-Asian-Street-Food-KG/sparql
```

Queries retrieve: dish names, countries, dietary info, ingredient sets (with `rdfs:label`), cooking techniques, preparation steps, regional variants, and prep times.

## Dishes Covered

| Dish | Country | Prep Time |
|---|---|---|
| Pani Puri | India | 60 min |
| Gol Gappay | Pakistan | 60 min |
| Fuchka | Bangladesh | 60 min |
| Samosa | India/Pakistan | 80 min |
| Shingara | Bangladesh | 80 min |
| Masala Dosa | India | 90 min |
| Idli Sambar | India | 120 min |
| Chapli Kebab | Pakistan | 70 min |
| Dahi Bharay | Pakistan | 90 min |
| Aloo Tikki | India | 45 min |
| VadaPav | India | 45 min |
| Chotpoti | Bangladesh | 35 min |
| Chana Chaat | India | 30 min |
| Beguni | Bangladesh | 25 min |
| Bhel Puri | India | 20 min |
| Jhalmuri | Bangladesh | 15 min |

## Running Locally

No build step required. Serve the root directory:

```bash
npx serve . -p 3000
```

Then open `http://localhost:3000`.

## Contributors

- **Areesha** — Knowledge Graph design & SPARQL dataset
- **Harrith** — Frontend development
- **Ananyo** — UI/UX & feature development
