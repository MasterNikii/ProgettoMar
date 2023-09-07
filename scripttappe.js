function parlata(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatar", "/avatar3d/audio/ParladiPino.mp3", parla);
}

function parla(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: .6; loop:once;")
}





function parlataPe(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatar", "/avatar3d/audio/PetraPetra.mp3", parlaPe);
}

function parlaPe(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: .6; loop:once;")
}


function parlataDant(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatar", "/avatar3d/audio/DarioDante.mp3", parlaPe);
}

function parlaDant(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: .6; loop:once;")
}


function parlataDante2(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatar", "/avatar3d/audio/DarioDante2.mp3", parlaPe);
}

function parlaDante2(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: .6; loop:once;")
}



function parlataDante3(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatar", "/avatar3d/audio/DarioUffizi.mp3", parlaPe);

}

function parlaDante3(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: .6; loop:once;")
}







function parlataF(){
    var me= document.getElementById("idAvatarF")
    me.setAttribute("animation-mixer", "clip: pinocchio; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatarP", "/avatar3d/audio/ParlataPi.mp3", parlaF);
}

function parlaF(){
    var me= document.getElementById("idAvatarF")
    me.setAttribute("animation-mixer", "clip: pinocchio; crossFadeDuration: .6; loop:once;")
}








function parlataFr(){
    var me= document.getElementById("idAvatarFr")
    me.setAttribute("animation-mixer", "clip: Francesco; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatarP", "/avatar3d/audio/Petrarca.mp3", parlaFr);
}

function parlaFr(){
    var me= document.getElementById("idAvatarFr")
    me.setAttribute("animation-mixer", "clip: Francesco; crossFadeDuration: .6; loop:once;")
}





function parlataDa(){
    var me= document.getElementById("idAvatarDa")
    me.setAttribute("animation-mixer", "clip: dante; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatarDa", "/avatar3d/audio/PiazzaDante.mp3", parlaDa);
}

function parlaDa(){
    var me= document.getElementById("idAvatarDa")
    me.setAttribute("animation-mixer", "clip: dante; crossFadeDuration: .6; loop:once;")
}





function parlataDan(){
    var me= document.getElementById("idAvatarDa")
    me.setAttribute("animation-mixer", "clip: dante; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatarDa", "/avatar3d/audio/VecchioDante.mp3", parlaDan);
}

function parlaDan(){
    var me= document.getElementById("idAvatarDa")
    me.setAttribute("animation-mixer", "clip: dante; crossFadeDuration: .6; loop:once;")
}





function parlataDante(){
    var me= document.getElementById("idAvatarDa")
    me.setAttribute("animation-mixer", "clip: dante; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatarDa", "/avatar3d/audio/ULTIMOPORCODIO.mp3", parlaDante);
    var elemento = document.getElementById("Cubo"); // Sostituisci "ilTuoElemento" con l'ID del tuo elemento
  
    // Verifica se l'elemento esiste prima di impostare l'attributo
    if (elemento) {
      elemento.setAttribute("visible", "true");
    }
}

function parlaDante(){
    var me= document.getElementById("idAvatarDa")
    me.setAttribute("animation-mixer", "clip: dante; crossFadeDuration: .6; loop:once;")
}






function offText(){
    var _text = document.getElementById("Text")
    var _currentVisible = _text.getAttribute("visible")
    

    if(_currentVisible == false){
        _text.setAttribute("visible", "true")


    }else{
        _text.setAttribute("visible", "false")
        
    }
}
function offTextl(){
    var _text = document.getElementById("Text")
    var _currentVisible = _text.getAttribute("visible")
    

    if(_currentVisible == false){
        _text.setAttribute("visible", "true")


    }else{
        _text.setAttribute("visible", "false")
        
    }
}
function parteFinale(){
    window.location.href ="fine.html";

}
function eseguiAzione(){
    window.location.href ="percorso.html"
}
// Definisci la funzione per impostare l'attributo "visible" su "true"
function setElementVisibleTrue() {
    // Trova l'elemento a cui desideri applicare l'attributo
    var elemento = document.getElementById("Cubo"); // Sostituisci "ilTuoElemento" con l'ID del tuo elemento
  
    // Verifica se l'elemento esiste prima di impostare l'attributo
    if (elemento) {
      elemento.setAttribute("visible", "true");
    }
  }
  
  // Collega la funzione a un elemento HTML tramite l'evento di click
  var ilTuoBottone = document.getElementById("idAvatar"); // Sostituisci "ilTuoBottone" con l'ID del tuo bottone
  ilTuoBottone.addEventListener("grabbing", setElementVisibleTrue);
  