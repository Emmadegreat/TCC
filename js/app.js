document.getElementById("rights").innerHTML = new Date().getFullYear();



document.getElementById("pos").innerHTML ="welcome Emma";
const menu = document.querySelector('#mobile_menu');
const menuLinks = docum.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});