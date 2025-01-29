document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("nav_toggle");
    const nav = document.getElementById("nav_menu");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            nav.classList.toggle("show");
        });
    } else {
        console.error("Menu or toggle element not found");
    }
});

const navLink =document.querySelectorAll('.nav_link')


;

function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active');
    const navMenu=document.getElementById('nav_menu')
    navMenu.classList.remove('show');

}
navLink.forEach(n=> n.addEventListener('click',linkAction));