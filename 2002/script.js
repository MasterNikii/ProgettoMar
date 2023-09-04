/*StartAudioAndUpdatingMouth(
    "idAvatar",
    "/avatar3d/PARLATO/audio1.mp3",
    OnEndCallback);*/

function parlata(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: 1; loop:true;")
    StartAudioAndUpdatingMouth( "idAvatar", "/avatar3d/audio/parlata.mp3", parla);
}

function parla(){
    var me= document.getElementById("idAvatar")
    me.setAttribute("animation-mixer", "clip: parlata; crossFadeDuration: .6; loop:once ;")
}