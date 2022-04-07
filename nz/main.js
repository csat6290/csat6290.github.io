/* Neuseelandreise Skript */
// einzeliger Kommentar

let lat = -45.874167;

let lng = 170.503611;

let zoom = 13;

let map = L.map('map').setView([lat, lng], zoom);

// let sind die Variablen

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup('<h3>Dunedin</h3>')
    .openPopup();

