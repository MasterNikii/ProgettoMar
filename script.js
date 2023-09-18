
window.onload = function() {
    var audio = document.getElementById("myAudio");
    audio.play();
  };



//var map = L.map('map').setView([43.76704574773139, 11.255624986606689], 16);




L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 28,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



function parlata(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatar", "/avatar3d/audio/ParlaInizio.mp3", parla);
}

function parla(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: .6; loop:once;")
}
function parlataf(){
    var me= document.getElementById("idAvatarF")
    me.setAttribute("animation-mixer", "clip: parlata01; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatarF", "/audio/audiosandra/partenza.m4a", parlaf);
}

function parlaf(){
    var me= document.getElementById("idAvatarF")
    me.setAttribute("animation-mixer", "clip: parlata01; crossFadeDuration: .6; loop:once;")
}

var latlngs = [
    [43.76550941806019, 11.258354663823695],
    [43.767015133134734, 11.254330246282999],
    [43.76700883881855, 11.254113937750299],
    [43.76741971981724, 11.252693271846026],
    [43.76847717982553, 11.253498772747585],
    [43.76800062943867, 11.254746364619738],
    [43.76781357755911, 11.255115821501851],
    [43.76691109910377, 11.258974146685954]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);



function offText(){
    var _text = document.getElementById("Text")
    var _currentVisible = _text.getAttribute("visible")
    

    if(_currentVisible == false){
        _text.setAttribute("visible", "true")


    }else{
        _text.setAttribute("visible", "false")
        
    }
}


function offTextf(){
    var _text = document.getElementById("Textf")
    var _currentVisible = _text.getAttribute("visible")
    

    if(_currentVisible == false){
        _text.setAttribute("visible", "true")


    }else{
        _text.setAttribute("visible", "false")
        
    }
}
    
function secondaParte(){
    window.location.href ="parte2.html";

}
function _homepage(){
    window.location.href ="parte2.html";

}
function secondaParteH(){
    window.location.href ="parte2h.html";

}

