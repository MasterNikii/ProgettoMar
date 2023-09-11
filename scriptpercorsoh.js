var map = L.map('map').setView([43.77106985517448, 11.253572351144337], 16.4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    minZoom: 15,
}).addTo(map);



var latlngs = [
    [43.77660039356097, 11.253893730150779],/*Basilica san lorenzo*/
    [43.77606929340957, 11.254264101264436],
    [43.77542235483484, 11.254019095980382],
    [43.77504326363186, 11.255096968046779],
    [43.77477051883198, 11.255910086592088],
    [43.773379506995646, 11.255378767972438],/*Piazza Signoria */
    [43.77282464783224, 11.255394159828086],
    [43.769948343320515, 11.255256866768022],
    [43.76931295734034, 11.25578974362769], /*Basilica Santa maria Novella*/
    [43.769173874560614, 11.255858940223451],
    [43.76793486284088, 11.255267846407879],/*Palazzo Vecchio*/

];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
var popup = L.popup({
  autoClose: false,  // Impedisce la chiusura automatica del popup
  closeOnClick: false,  // Impedisce la chiusura del popup quando si fa clic sulla mappa
  className: 'custom-popup' // Aggiungi la classe CSS personalizzata
})
  .setLatLng([43.77660039356097, 11.25389373015077])
  .setContent('Partenza')
  .openOn(map);
const marker1 = L.marker([43.77660039356097, 11.253893730150779]).addTo(map);
const marker3 = L.marker([43.77315136746382, 11.255415626881938]).addTo(map);
const marker2 = L.marker([43.76931295734034, 11.25578974362769]).addTo(map);
const marker4 = L.marker([43.76793486284088, 11.255267846407879]).addTo(map);
var popupa = L.popup({
  autoClose: false,  // Impedisce la chiusura automatica del popup
  closeOnClick: false,  // Impedisce la chiusura del popup quando si fa clic sulla mappa
  className: 'custom-popup' // Aggiungi la classe CSS personalizzata
})
  .setLatLng([43.76792500474747, 11.255235703333273])
  .setContent('    Arrivo   ')
  .openOn(map);



let template1 =`
<div>
<img style="  display: flex;
justify-content: center;
align-items: center;
height: 255px;
width: 255px;
" src="/DAJE/immaginisss/toni/mercato.jpg" alt="" style="">
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
" src="/DAJE/immaginisss/225px-Firenze_Palazzo_della_Signoria,_better_known_as_the_Palazzo_Vecchio.jpg" alt="" style="">
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
" src="/DAJE/immaginisss/toni/cattedrale.jpg" alt="">
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
" src="/DAJE/immaginisss/toni/uffizi3.jpg" alt="">
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







  
