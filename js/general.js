let offCanvas = document.querySelector("#offcanvas");
let menuButton = document.querySelector("#menu-button");
let closeButton = document.querySelector('#close-button');

menuButton.addEventListener('click', function(e){
    offCanvas.style.right = '0';
})

closeButton.addEventListener('click', function(e){
    e.preventDefault();
    offCanvas.style.right = '-260px';       
})






