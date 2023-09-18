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
var polyline = L.polyline(latlngs, {color: "rgb(44 132 203)"}).addTo(map);
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
  border-radius: 20px;
  " src="/DAJE/immaginisss/toni/mercato.jpg" alt="" style="">
  </div>
  
  <a href="tappad1.html" style="background-color: white;
  border: none;
  color: rgb(44 132 203);
  background-color: #ffff;
  padding: 16px 87px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22 px;
  font-weight: bold;
  
  
  transition: all 0.3s ease-in-out;">Arrivato</a>
  `
  let template2 =`
  
  <div>
  <img style="  display: flex;
  justify-content: center;
  align-items: center;
  height: 255px;
  width: 255px;
  border-radius: 20px;
  " src="/DAJE/immaginisss/toni/castello.jpg" alt="" style="">
  </div>
  
  <a href="tappad2.html" style="background-color: white;
  border: none;
  color: rgb(44 132 203);
  background-color: #ffff;
  padding: 16px 87px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22 px;
  font-weight: bold;
  
  
  transition: all 0.3s ease-in-out;">Arrivato</a>
  `
  let template3 =`
  
  <div>
  <img style="  display: flex;
  justify-content: center;
  align-items: center;
  height: 255px;
  width: 255px;
  border-radius: 20px;
  " src="/DAJE/immaginisss/toni/cattedrale.jpg" alt="">
  </div>
  
  <a href="tappad3.html" style="background-color: white;
  border: none;
  color: rgb(44 132 203);
  background-color: #ffff;
  padding: 16px 87px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22 px;
  font-weight: bold;
  
  
  transition: all 0.3s ease-in-out;">Arrivato</a>
  `
  let template4 =`
  
  <div>
  <img style="  display: flex;
  justify-content: center;
  align-items: center;
  height: 255px;
  width: 255px;
  border-radius: 20px;
  " src="/DAJE/immaginisss/toni/uffizi3.jpg" alt="">
  </div>
  
  <a href="tappad4.html" style="background-color: white;
  border: none;
  color: rgb(44 132 203);
  background-color: #ffff;
  padding: 16px 87px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22 px;
  font-weight: bold;
  
  
  transition: all 0.3s ease-in-out;">Arrivato</a>
  `

  
  marker1.bindPopup(template1);
  marker2.bindPopup(template2);
  marker3.bindPopup(template3);
  marker4.bindPopup(template4);
  marker5.bindPopup(template5);