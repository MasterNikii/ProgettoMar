var map = L.map('map').setView([40.846807317507015, 14.251582298596107], 13);




L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 22,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([40.82330521958126, 14.425424845239387]).addTo(map);




var greenIcon = L.icon({
    iconUrl: '/immagini/leaf-green.png',
    shadowUrl: '/immagini/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([40.85436500681486, 14.174855513173782], {icon: greenIcon}).addTo(map);
let template=`
<h1>In un futuro prossimo:</h1>
<img width="300" height="300" src="/immagini/vesuvio.jpg" >`/* alt+96 per avere = `*/ 
marker.bindPopup(template)

/* var linea = L.polygon([
    [40.87197276478082, 14.282523989436152],
    [40.881591001748724, 14.271891089794286],
]).addTo(map);
var linea = L.polygon([
    [40.881591001748724, 14.271891089794286],
    [40.895087028602134, 14.28187631328112],
]).addTo(map);
var linea = L.polygon([
    [40.895087028602134, 14.28187631328112],
    [40.88675634882708, 14.302132522750892]
]).addTo(map);
var linea = L.polygon([
    [40.87197276478082, 14.282523989436152],
    [40.88675634882708, 14.302132522750892]
]).addTo(map);
*/
    var latlngs = [
        [40.87197276478082, 14.282523989436152],
        [40.881591001748724, 14.271891089794286],
        [40.895087028602134, 14.28187631328112],
        [40.88675634882708, 14.302132522750892],
        [40.87197276478082, 14.282523989436152]
    ];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
var popup = L.popup()
    .setLatLng([40.88461921993935, 14.291057635060472])
    .setContent("Ciao sono dario e ti offro un panino")
    .openOn(map);
