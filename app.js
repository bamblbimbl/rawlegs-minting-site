
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  
});

var canvas = document.getElementById('c'),
    input = document.getElementById('i'),
    ctx = canvas.getContext('2d'),
    reader = new FileReader(),
    img = new Image();

canvas.width = 300;
canvas.height = 220;

var loadFile = function (event) {
  var file = event.target.files[0];
  img.onload = drawImg;
  img.src = URL.createObjectURL(file);
};











