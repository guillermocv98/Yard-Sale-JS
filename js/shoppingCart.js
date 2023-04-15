// VARIABLES
const linkMenuCartHTML = document.querySelector('#link-shopping-cart');
const menuCartHTML = document.querySelector('#shopping-cart');


const listCart = [];

// ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', e => {

    linkMenuCartHTML.addEventListener('click', e => {
        toggleMenu(menuCartHTML);
    });

});






