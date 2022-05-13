document.getElementsByTagName("p").style.fontSize = "6rem";



document.getElementById("pos").innerHTML ="welcome Emma";
const menu = document.querySelector('#mobile_menu');
const menuLinks = docum.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});