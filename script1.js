const myButton = document.querySelector("#myButton");
let clicked = false;

myButton.addEventListener("click", function() {
  if (clicked) {
    myButton.style.backgroundColor = "white";
    clicked = false;
  } else {
    myButton.style.backgroundColor = "green";
    clicked = true;
  }
});
