function offText(){
    var _text = document.getElementById("Text")
    var _currentVisible = _text.getAttribute("visible")
    var _button= document.getElementById("Bottone2")

    if(_currentVisible == true){
        _text.setAttribute("visible", "false")
        _button.innerHTML ="Mostra testo"

    }else{
        _text.setAttribute("visible", "true ")
        _button.innerHTML ="Nascondi testo"   
        
    }
    console.log(_currentVisible)
}
