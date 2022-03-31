/* Neuseelandreise Skript */
// einzeliger Kommentar

var map = L.map('map').setView([-45.874167, 170.503611], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-45.874167, 170.503611]).addTo(map)
    .bindPopup('<h3>Dunedin</h3>')
    .openPopup();