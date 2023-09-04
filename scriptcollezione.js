// Optional: preload images for smoother experience
  
  // Optional: use event delegation for better performance
  document.querySelector(".gallery").addEventListener("click", event => {
    if (event.target.tagName === "IMG") {
      // Do something with the clicked image
    }
  });
  document.getElementById("indietro").addEventListener("click", function(){
    window.history.back();
  });
  
  

  