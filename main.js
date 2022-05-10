//select button

let button = document.querySelector('#dark-mode-button');
function darkMode() {

var element = document.body;
  element.classList.toggle("dark-mode-theme");
}

//add event listener
button.addEventListener('click', darkMode);