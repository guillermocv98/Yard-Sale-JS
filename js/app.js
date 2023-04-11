// VARIABLES

//Desplegables
const linkMenuMobile = document.querySelector('#link-menu--mobile');
const menuMobile = document.querySelector('#menu--mobile');

const linkMenuDesktop = document.querySelector('#link-menu--desktop');
const menuDesktop = document.querySelector('#menu--desktop');

const linkMenuCarrito = document.querySelector('#link-menu--carrito');
const menuCarrito = document.querySelector('#menu--carrito');

console.log();


//ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', () => {

    // Desplegables
    linkMenuMobile.addEventListener('click', e => {
        toggleMenu(menuMobile);
    });
    linkMenuDesktop.addEventListener('click', e => {
        toggleMenu(menuDesktop);
    });
    linkMenuCarrito.addEventListener('click', e => {
        toggleMenu(menuCarrito);
    });

});


//FUNCIONES

// Desplegables
function toggleMenu(menu) {
    menu.classList.toggle('inactive');
};
