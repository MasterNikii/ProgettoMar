const trophy = document.getElementById('trophy');
const message = document.getElementById('message');
const finishButton = document.getElementById('finish-button');
const showButton = document.getElementById('show-button'); // Aggiunto

finishButton.addEventListener('click', () => {
    trophy.style.opacity = '1';
    trophy.style.transform = 'scale(1)';
    
    message.style.opacity = '1';
    message.style.transform = 'translateY(0)';
    message.textContent = 'Ecco il tuo meritato trofeo!';
    
    finishButton.style.display = 'none';
    
    // Mostra il bottone dopo aver visualizzato il trofeo
    showButton.style.display = 'block';
});
// Otteniamo riferimento all'elemento audio
const music = document.getElementById("music");

// Otteniamo riferimento al bottone "Mostra Ricompensa"

// Aggiungiamo un gestore di eventi al bottone
finishButton.addEventListener("click", function() {
    // Avviamo la musica
    music.play();
    
    // Nascondiamo il bottone "Mostra Ricompensa"
    finishButton.style.display = "none";
    
    // Mostrare il bottone "Torna indietro"
    const showButton = document.getElementById("show-button");
    showButton.style.display = "block";
});
const gameContainer = document.getElementById("game-container");

// Aggiungi un gestore di eventi al bottone "Mostra Ricompensa"
finishButton.addEventListener("click", function () {
  // Avvia la musica
  music.play();

  // Nascondi il bottone "Mostra Ricompensa"
  finishButton.style.display = "none";

  // Mostra il bottone "Torna indietro"
  showButton.style.display = "block";

  // Aggiungi più coriandoli
  addConfetti(1000); // Modifica il numero di coriandoli desiderato
});


function addConfetti(numConfetti) {
    for (let i = 0; i < numConfetti; i++) {
      const confetti = document.createElement("div");
      confetti.className = "coronavirus";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(confetti); // Aggiungi i coriandoli al body invece che al game-container
    }
  }
  
// Funzione per generare un colore casuale in formato RGB
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Funzione per aggiungere i coriandoli con colori casuali
  function addConfetti(numConfetti) {
    for (let i = 0; i < numConfetti; i++) {
      const confetti = document.createElement("div");
      confetti.className = "coronavirus";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confetti.style.backgroundColor = getRandomColor(); // Assegna un colore casuale
      document.body.appendChild(confetti);
    }
  }
  
  // Aggiungi un event listener al bottone "Mostra Ricompensa"
  finishButton.addEventListener('click', function () {
    // Avvia la musica
    music.play();
  
    // Nascondi il bottone "Mostra Ricompensa"
    finishButton.style.display = "none";
  
    // Mostra il bottone "Torna indietro"
    showButton.style.display = "block";
  
  });