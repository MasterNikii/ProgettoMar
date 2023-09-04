const cambiaColoreButton = document.getElementById("cambiaColore");

// Verifica se il colore di sfondo è già stato impostato in precedenza e applicalo
const storedColor = localStorage.getItem("coloreDiSfondo");
if (storedColor) {
  document.body.style.backgroundColor = storedColor;
}

// Verifica se il pulsante è verde e applica lo stato
const isButtonGreen = localStorage.getItem("isButtonGreen");
if (isButtonGreen === "true") {
  cambiaColoreButton.classList.add("button-green");
}

// Aggiungi un ascoltatore di eventi per il clic sul pulsante
cambiaColoreButton.addEventListener("click", function() {
  const currentColor = document.body.style.backgroundColor;
  if (currentColor === "white") {
    document.body.style.backgroundColor = "rgb(0, 0, 102)";
    localStorage.setItem("coloreDiSfondo", "rgb(0, 0, 102)");
  } else {
    document.body.style.backgroundColor = "white";
    localStorage.setItem("coloreDiSfondo", "white");
  }

  cambiaColoreButton.classList.toggle("button-green");

  // Salva lo stato del pulsante
  const isGreen = cambiaColoreButton.classList.contains("button-green");
  localStorage.setItem("isButtonGreen", isGreen);
});
