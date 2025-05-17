> # WorldMapProject
>
> **Author:** Dymon18  
> **Date Started:** 2025-04-27  
> **Last Edited:** 2025-04-29  
> **Access Repo:** 
git clone https://github.com/Dymon18/WorldMapProject.git

---

## Project Overview

**WorldMapProject** is a photo‑memory web application that lets users store and revisit travel photos as “memories” tied to locations on an interactive world map. Users can upload photos (with automatic or manual geotagging), browse visits by country, state, and city, and maintain privacy with tiered visibility and face‑blurring.

## Key Features (MVP)

- **User Authentication**: Sign up and log in to keep photo memories private.
- **Photo Upload & Geotagging**  
  - Automatic EXIF extraction when available.  
  - Manual pin or selector if metadata is missing.  
- **Interactive Map**  
  - World → Country → State → City zoom levels.  
  - Border highlighting on hover; click to drill down.  
  - Shaded or pinned visited regions.  
- **Memory Gallery**  
  - View images, captions, and timestamps per location.  
- **Privacy Controls**  
  - Tiered sharing (private, friends, public).  
  - Optional face‑blur tool for sensitive images.

  ## Learning and Research 

- [ ] Interactive Map that can store data
- [ ] Picture Geotagging
- [ ] User Auth
- [ ] Privacy and Secrity


## Architecture & Tech Stack

```
[Frontend SPA] ←→ [API] ←→ [Database + Storage]
       ↓           ↓             ↓
   Mapbox/Leaflet  Node/Django   PostgreSQL + PostGIS
                   Express/DRF   AWS S3 (image files)
                                   EXIF & Blur Service
```

- **Frontend**: React (or Vue) with Mapbox GL JS or Leaflet.  
- **Backend**: Node.js + Express or Python + Django REST Framework.  
- **Database**: PostgreSQL with PostGIS for spatial queries.  
- **Storage**: AWS S3 (or GCS) for photos.  
- **Image Processing**: EXIFtool for metadata; OpenCV or managed service for face‑blurring.


## Development Roadmap

| Phase    | Goals                                                                                 | Timeline    |
|----------|---------------------------------------------------------------------------------------|-------------|
| **1**    | Setup repo, CI/CD, hosting; Auth scaffold; DB schema (users, photos, locations).       | 1–2 weeks   |
| **2**    | Interactive map component (world + country); photo upload + EXIF parsing; map pins.    | 2–3 weeks   |
| **3**    | Gallery views; manual geotagging UI; add state/city zoom levels.                       | 2 weeks     |
| **4**    | Privacy tiers & face‑blur toggle; UI/UX polish; responsive layout; test & QA.           | 2–3 weeks   |
| **5**    | Public deployment; analytics; plan PWA/native app with React Native or Flutter.         | 2 weeks     |

_Total MVP delivery: ~2 months._

## Testing & QA

- **Unit Tests** for API and upload logic.  
- **Integration Tests** for map interactions and data flows.  
- **E2E Tests** with Cypress or Playwright (upload → pin → gallery).  
- **Usability Testing** with target users for map UI feedback.  
- **Performance Monitoring** for map tiles and image loads.

## Next Steps

1. **Wireframes**: Sketch main screens (map view, upload flow, gallery page).  
2. **Project Setup**: Initialize repo, CI/CD (GitHub Actions, Travis CI).  
3. **Proof‑of‑Concept**: Demo with one photo pinned on a Mapbox map to validate mapping tech.  

---

## Folder Structure (Proposed)

```
├── /client            # Frontend app (React/Vue)  
├── /server            # API (Node/Django)  
│   ├── src/           # API endpoints, services  
│   └── tests/         # Backend tests  
├── /db                # Migrations and schema  
├── /scripts           # Build, deploy, utilities  
├── /docs              # Designs, wireframes, diagrams  
└── README.md          # Project overview and plan
```

## TODO

- [ ] Finalize wireframes and UX flows.  
- [ ] Initialize repository and CI pipeline.  
- [ ] Build basic photo‑upload + Mapbox POC.  

## Future Enhancements

- Social sharing and comments.  
- Offline map caching (PWA).  
- Mobile apps (React Native / Flutter).  
- Advanced analytics and timeline view.

