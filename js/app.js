// VARIABLES
const menuMobileLinkHTML = document.querySelector('#link-menu--mobile');
const menuMobileHTML = document.querySelector('#menu--mobile');

const menuDesktopLinkHTML = document.querySelector('#link-menu--desktop');
const menuDesktopHTML = document.querySelector('#menu--desktop');



//ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', () => {

    menuMobileLinkHTML.addEventListener('click', e => {
        toggleMenu(menuMobileHTML);
    });

    menuDesktopLinkHTML.addEventListener('click', e => {
        toggleMenu(menuDesktopHTML);
    });

});



//FUNCIONES
function toggleMenu(menu) {
    menu.classList.toggle('inactive');
};
function openView(reference) {
    reference.classList.remove('inactive');
}
function closeView(reference) {
    reference.classList.add('inactive');
}
