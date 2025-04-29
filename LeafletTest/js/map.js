// 1. Initialize map centered on [lat, lng] = [20, 0], zoom level 2
const map = L.map('map').setView([20, 0], 2);

// 2. Add a free OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 3. Load GeoJSON of world countries (you’ll download this file next)
fetch('data/countries.geojson')
  .then(res => res.json())
  .then(geojson => {
    // 4. Add the GeoJSON layer
    L.geoJSON(geojson, {
      style: { color: '#555', weight: 1, fillOpacity: 0 },
      onEachFeature: (feature, layer) => {
        // 5. On hover: highlight
        layer.on('mouseover', () => {
          layer.setStyle({ weight: 2, fillOpacity: 0.3, fillColor: 'orange' });
        });
        layer.on('mouseout', () => {
          layer.setStyle({ weight: 1, fillOpacity: 0 });
        });
        // 6. On click: zoom to country
        layer.on('click', () => {
          map.fitBounds(layer.getBounds());
        });
      }
    }).addTo(map);
  })
  .catch(err => console.error('Failed to load GeoJSON:', err));
