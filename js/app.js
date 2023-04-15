// VARIABLES


// Desplegables // 

const linkMenuMobileHTML = document.querySelector('#link-menu--mobile');
const menuMobileHTML = document.querySelector('#menu--mobile');


const linkMenuDesktopHTML = document.querySelector('#link-menu--desktop');
const menuDesktopHTML = document.querySelector('#menu--desktop');






//ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', () => {

    linkMenuMobileHTML.addEventListener('click', e => {
        toggleMenu(menuMobileHTML);
    });

    linkMenuDesktopHTML.addEventListener('click', e => {
        toggleMenu(menuDesktopHTML);
    });

});





//FUNCIONES

// Desplegables
function toggleMenu(menu) {
    menu.classList.toggle('inactive');
};
function openView(reference) {
    reference.classList.remove('inactive');
}
function closeView(reference) {
    reference.classList.add('inactive');
}
