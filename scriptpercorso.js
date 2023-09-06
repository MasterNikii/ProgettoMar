var map = L.map('map').setView([43.77106985517448, 11.253572351144337], 16.4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    minZoom: 15,
}).addTo(map);



var latlngs = [
    [43.77540456072461, 11.25368819025707],/*Basilica san lorenzo*/
    [43.776043451365915, 11.253107472260597],
    [43.775164238647044, 11.250888359729863],
    [43.775032763457894, 11.250114541026923],
    [43.774589055501735, 11.250277658289995],
    [43.77481638891255, 11.249959023049692], /*Basilica Santa maria Novella*/
    [43.77395635948617, 11.251229753897757],
    [43.77340855231214, 11.25218515971421],
    [43.7734304231781, 11.252741678917198],
    [43.770254239122494, 11.25279820167133],
    [43.77021514669676, 11.254444679339722],
    [43.770205795878084, 11.255321392864547],
    [43.76991138743108, 11.255289206097931],
    [43.76972251390504, 11.255643385939326],/*Piazza Signoria */
    [43.76938161905783, 11.255686308116639],/*Palazzo Vecchio*/
    [43.769242168744796, 11.255809689908762],
    [43.76905472842382, 11.255862904826982],
    [43.76795604656944, 11.255337621614501],/*Uffizi*/

];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
var popup = L.popup({
  autoClose: false,  // Impedisce la chiusura automatica del popup
  closeOnClick: false,  // Impedisce la chiusura del popup quando si fa clic sulla mappa
  className: 'custom-popup' // Aggiungi la classe CSS personalizzata
})
  .setLatLng([43.775547485871044, 11.253711462123889])
  .setContent('Partenza')
  .openOn(map);
const marker1 = L.marker([43.77540456072461, 11.25368819025707]).addTo(map);
const marker2 = L.marker([43.77481638891255, 11.249959023049692]).addTo(map);
const marker3 = L.marker([43.76972251390504, 11.255643385939326]).addTo(map);
const marker4 = L.marker([43.76938161905783, 11.255686308116639]).addTo(map);
const marker5 = L.marker([43.76795604656944, 11.255337621614501]).addTo(map);
var popupa = L.popup({
  autoClose: false,  // Impedisce la chiusura automatica del popup
  closeOnClick: false,  // Impedisce la chiusura del popup quando si fa clic sulla mappa
  className: 'custom-popup' // Aggiungi la classe CSS personalizzata
})
  .setLatLng([43.76798392376237, 11.255354520686927])
  .setContent('    Arrivo   ')
  .openOn(map);



let template1 =`
<div>
<img style="  display: flex;
justify-content: center;
align-items: center;
height: 255px;
width: 255px;
" src="/DAJE/immaginisss/1024-Basilica_di_San_Lorenzo.jpg" alt="" style="">
</div>

<button class="my-btn" style=".my-btn {
    background-color: #d43f8d;
    border: none;
    color: #fff;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    font-family:  'Helvetica', cursive;
  }
  
  .my-btn:hover {
    background-color: #ff5c99;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  "><a href="tappa1.html" id="_tutorial">Arrivato</a></button>
`
let template2 =`

<div>
<img style="  display: flex;
justify-content: center;
align-items: center;
height: 255px;
width: 255px;
" src="/DAJE/immaginisss/santa.jpg" alt="" style="">
</div>

<button class="my-btn" style=".my-btn {
    background-color: #d43f8d;
    border: none;
    color: #fff;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  
  .my-btn:hover {
    background-color: #ff5c99;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  "><a href="tappa2.html" id="_tutorial">Arrivato</a></button>
`
let template3 =`

<div>
<img style="  display: flex;
justify-content: center;
align-items: center;
height: 255px;
width: 255px;
" src="/DAJE/immaginisss/piazza.jpg" alt="">
</div>

<button class="my-btn" style=".my-btn {
    background-color: #d43f8d;
    border: none;
    color: #fff;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  
  .my-btn:hover {
    background-color: #ff5c99;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  "><a href="tappa3.html" id="_tutorial">Arrivato</a></button>
`
let template4 =`

<div>
<img style="  display: flex;
justify-content: center;
align-items: center;
height: 255px;
width: 255px;
" src="/DAJE/immaginisss/225px-Firenze_Palazzo_della_Signoria,_better_known_as_the_Palazzo_Vecchio.jpg" alt="">
</div>

<button class="my-btn" style=".my-btn {
    background-color: #d43f8d;
    border: none;
    color: #fff;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  
  .my-btn:hover {
    background-color: #ff5c99;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  "><a href="tappa4.html" id="_tutorial">Arrivato</a></button>
`
let template5 =`
<div>
<img style="  display: flex;
justify-content: center;
align-items: center;
height: 255px;
width: 255px;
" src="/DAJE/immaginisss/uffizi3.jpg" alt="">
</div>

<button class="my-btn" style=".my-btn {
    background-color: #d43f8d;
    border: none;
    color: #fff;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  
  .my-btn:hover {
    background-color: #ff5c99;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  "><a href="tappa5.html" id="_tutorial">Arrivato</a></button>
`

marker1.bindPopup(template1);
marker2.bindPopup(template2);
marker3.bindPopup(template3);
marker4.bindPopup(template4);
marker5.bindPopup(template5);







  
