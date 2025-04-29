WMP Plan

### 1. Define Your MVP

**Core Features**  
1. **User Authentication** – sign up / log in, so each person’s memories are private.  
2. **Photo Upload with Geotagging**  
- **Automatic**: extract EXIF lat/long if present.  
- **Manual**: let users drop a pin or select a country/city from a list.  
3. **Interactive World Map**  
- Displays visited countries as shaded/pinned.  
- Hovering highlights the border.  
- Clicking zooms in (world → country → state → city).  
4. **Memory Gallery**  
- For each location, grid or carousel of photos + timestamp + caption.  
5. **Basic Privacy**  
- User-only access. (Later you can add “tiers” for friends/public and face-blurring.)

That let’s you test the core workflow (“upload a photo → pin it on a map → revisit it later”) without overengineering.

---

### 2. High-Level Architecture

```
[Frontend SPA] ←→ [REST / GraphQL API] ←→ [Database]
    ↓                                     ↓
[Map Library]                      [Image Storage (S3/GCS)]
    ↑                                     ↓
[Map Tiles (Mapbox/OSM)]          [EXIF & Face-blur Service]
```

- **Frontend**: React (or Vue) SPA  
- Map UI: Mapbox GL JS or Leaflet + vector tiles  
- **Backend**: Node.js/Express or Python/Django (with Django REST Framework)  
- **Database**: PostgreSQL + PostGIS extension (for spatial queries)  
- **File Storage**: AWS S3 or Google Cloud Storage  
- **Image Processing**:  
- EXIF metadata reading (e.g. using exiftool)  
- Optional face-blur: OpenCV or a managed service (e.g. AWS Rekognition blur API)

---

### 3. Technology Choices & Rationale

| Layer                  | Option A             | Option B                 | Why?                            |
|------------------------|----------------------|--------------------------|---------------------------------|
| Frontend framework     | React                | Vue.js                   | Huge ecosystem, Mapbox binding |
| Map library            | Mapbox GL JS         | Leaflet + OSM tiles      | Mapbox: smooth zoom & hover.    |
| Backend language       | Python/Django        | Node.js/Express          | Django: batteries-included; ORM |
| Spatial DB             | PostgreSQL + PostGIS | MongoDB + GeoJSON        | PostGIS: powerful spatial SQL.  |
| Storage                | AWS S3               | GCS                      | Both scalable.                  |
| Auth                   | JWT + OAuth          | Firebase Auth            | JWT: portable across clients.   |

> ***Tip:*** Start with free tiers and open-source where possible to avoid vendor lock-in.

---

### 4. Feature Roadmap & Sprints

| Phase       | Goals                                                 | Timeframe  |
|-------------|-------------------------------------------------------|------------|
| **Phase 1** | • Project setup (repo, CI/CD, hosting environment)  
• Basic Auth  
• DB schema (users, photos, locations) | 1–2 weeks  |
| **Phase 2** | • Interactive map component (world & country layers)  
• Photo upload + EXIF parsing  
• Pin placement on map | 2–3 weeks  |
| **Phase 3** | • Memory gallery views (list & map-driven)  
• Manual geotagging UI  
• Zoom levels: country → state | 2 weeks    |
| **Phase 4** | • Face-blur toggle & tiered sharing  
• Polish UI/UX, mobile responsiveness  
• Testing & QA | 2–3 weeks  |
| **Phase 5** | • Deploy publicly (initial website)  
• Analytics & performance tuning  
• Plan native app (React Native/Flutter) | 2 weeks    |

_Total MVP: ~2 months_  
_From there, add social features, friend-sharing, mobile apps, etc._

---

### 5. Testing & QA

- **Unit Tests** for backend logic (photo ingestion, geocoding).
- **Integration Tests** for API endpoints.
- **End-to-End Tests** with Cypress or Playwright (upload → map pin → gallery).
- **Usability Testing**: recruit a handful of friends/travelers to get feedback on the map UI.
- **Performance Monitoring**: ensure map tiles and image loads stay snappy (use lazy loading).

---

### 6. Scaling & Future App

1. **Website First** to validate product/market fit.  
2. **Progressive Web App (PWA)** for offline caching of maps/photos.  
3. **Native App** (React Native or Flutter) once core UX is nailed.

---

### 7. Next Steps

1. **Wireframes**: sketch screens for map, gallery, upload flow.  
2. **Repository & Roadmap**: set up Github (or GitLab), ticketing (Jira, Trello).  
3. **Spike**: build a tiny proof-of-concept showing “one photo pinned on a Mapbox world map” so you can validate the mapping tech.  

---

What area would you like to dive into first?  
- Mapping libraries and vector tiles?  
- Database schema & spatial queries?  
- Photo ingestion & metadata extraction?  
- Or setting up the repo and project structure?