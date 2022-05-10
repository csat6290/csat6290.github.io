/* Neuseelandreise Skript */
// einzeliger Kommentar

let zoom = 13;

let coords = [
    ETAPPEN[3].lat, ETAPPEN[3].lng
];
//console.log(coords)
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);

//console.log("text");
//console.log('text');
//console.log('id="map"');
//console.log(`latitude = ${lat} `);

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].titel);
//console.log(ETAPPEN[0].lat);
//console.log(ETAPPEN[0].lng);

//Etappe in der Konsole ansprechen

// consoles sind arrays

// coords sind die Koordinaten

// popup Liste erstellt mit einer Variable und anschließend die Etappenvariable benutzt um die Etappe zu beschriften


let map = L.map('map').setView(coords, zoom);

// let sind die Variablen

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (let etappe of ETAPPEN) {

    let popup = `
<h3> ${etappe.titel} (Etappe ${etappe.nr}) </h3>
<ul>
<li>geogr. Länge: ${etappe.lng}</li>
<li>geogr. Breite: ${etappe.lat}</li>
<li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
<li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>
</ul>
`;
    //console.log(etappe);
    let navClass = "etappenLink"
    let mrk = L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
    if (etappe.nr == 4) {
        mrk.openPopup();
        navClass = "etappenLink etappeAktuell"
    }

    //Etappennavigation erweitern
    let link = ` <a href="https://${etappe.github}.github.io/nz/" class="${navClass}" title="${etappe.titel}">${etappe.nr}</a>`;

    document.querySelector("#navigation").innerHTML += link;

}

// Doc Hütten anzeigen
//for ist eine Vorschleife

for (let hut of HUTS) {
    let popup = `
 <h3>${hut.name}</h3>
 <h4>${hut.region}</h4>
 <hr>
 <p>${hut.info}</p>
 <img src="${hut.image}" alt="Vorschaubild">
 <hr>
 <a href="${hut.link}" target= "Neuseeland">Link zur Hütte</a>
 `;
    let statusColor;
    if (hut.open == true) {
        statusColor = "green";
    } else {
        statusColor = "red";
    }
    L.circleMarker([hut.lat, hut.lng], {
        color: statusColor,
    }).addTo(map).bindPopup(popup);
}

let layerControl = L.control.layers({
    "Open Street Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),

    "Open Street Map (topographisch)": L.tileLayer.provider("OpenTopoMap"),

    "ÖPNV Karte": L.tileLayer.provider("OPNVKarte"),

    "ESRI Orthofoto": L.tileLayer.provider("Esri.WorldImagery"),

}).addTo(map);

layerControl.expand();

let sightLayer = L.featureGroup();

L.control.fullscreen().addTo(map);

L.control.scale({
    imperial: false,
}).addTo(map)

let miniMap = new L.Control.MiniMap(
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            
    }),
    {
        toggleDisplay: true
    }
    ).addTo(map);

    //müsste jetzt klappen