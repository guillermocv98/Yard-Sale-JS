// Variables
const linkMenuMobile = document.querySelector('#link-menu--mobile');
const linkMenuDesktop = document.querySelector('#link-menu--desktop');
const menuDesktop = document.querySelector('#menu--desktop');


//addEventListeners
document.addEventListener('DOMContentLoaded', () => {
    linkMenuDesktop.addEventListener('click', toggleDesktopMenu);
});


//Funciones 
function toggleDesktopMenu() {
    menuDesktop.classList.toggle('inactive');
};