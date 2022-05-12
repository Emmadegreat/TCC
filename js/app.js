const menu = document.querySelector('#mobile_menu');
const menuLinks = docum.querySelector('.navbar_menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.getElementById("p1").addEventListener('mouseover', function(){
    alert("i was clicked");
});