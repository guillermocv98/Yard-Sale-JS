// Variables
const linkMenuMobile = document.querySelector('#link-menu--mobile');
const linkMenuDesktop = document.querySelector('#link-menu--desktop');
const menuDesktop = document.querySelector('#menu--desktop');
const menuMobile = document.querySelector('#menu--mobile');


//addEventListeners
document.addEventListener('DOMContentLoaded', () => {
    linkMenuMobile.addEventListener('click', toggleMobileMenu);
    linkMenuDesktop.addEventListener('click', toggleDesktopMenu);
});


//Funciones 
function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
}
function toggleDesktopMenu() {
    menuDesktop.classList.toggle('inactive');
};