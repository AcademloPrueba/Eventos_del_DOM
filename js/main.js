

// window.alert('me enlace con el html');


// document.addEventListener("DOMContentLoaded", function () {
//     console.log("el dom se cargo correctamente");
// })

// const menu = document.querySelector('.header_menu');

// menu.addEventListener("click", function() {
//     window.alert('hiciste click en el menu');
// })

// const section = document.querySelector('.section');

// const arrayclass = document.querySelectorAll('.header_list_item');

// console.log(arrayclass);

// arrayclass[0].addEventListener("click", function() {
//     section.classList.add('red');
// })

// arrayclass[1].addEventListener("click", function() {
//     section.classList.remove('red');
// })

// arrayclass[2].addEventListener("click", function() {
//     section.classList.toggle('red');
// })

const header_list = document.querySelector('.header_list');
const menu_open = document.querySelector('.menu_open');
const menu_close = document.querySelector('.menu_close');
menu_open.addEventListener("click", function() {
    header_list.classList.add('active');
    menu_open.classList.add('active');
    menu_close.classList.add('active');
});
menu_close.addEventListener("click", function() {
    header_list.classList.remove('active');
    menu_open.classList.remove('active');
    menu_close.classList.remove('active');
});