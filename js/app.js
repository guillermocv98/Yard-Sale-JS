// VARIABLES


// Desplegables // 

const linkMenuMobile = document.querySelector('#link-menu--mobile');
const menuMobile = document.querySelector('#menu--mobile');


const linkMenuDesktop = document.querySelector('#link-menu--desktop');
const menuDesktop = document.querySelector('#menu--desktop');


const linkMenuCart = document.querySelector('#link-shopping-cart');
const menuCart = document.querySelector('#shopping-cart');



// -- Show product -- //

// Link apertura en la línea 6 de la inserción del HTML //
const linkCloseShowProduct = document.querySelector('#close-show-product')
const showProduct = document.querySelector('#show-product');
console.log(showProduct)

const showProductImgAvif = document.querySelector('#show-product-img--avif');
const showProductImgWebp = document.querySelector('#show-product-img--webp');
const showProductImgJpg= document.querySelector('#show-product-img--jpg');
const showProductPrice = document.querySelector('#show-product-price')
const showProductName = document.querySelector('#show-product-name')

const linkAddToCartAside = document.querySelector('#add-to-cart--aside');





//ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', () => {

    // Desplegables
    linkMenuMobile.addEventListener('click', e => {
        toggleMenu(menuMobile);
    });

    linkMenuDesktop.addEventListener('click', e => {
        toggleMenu(menuDesktop);
    });

    linkMenuCart.addEventListener('click', e => {
        toggleMenu(menuCart);
    });

    // Evento apertura ShowProduct en la línea 6 de la inserción del HTML //

    linkCloseShowProduct.addEventListener('click', e => {
        closeView(showProduct)
    });

    linkAddToCartAside.addEventListener('click', e => {
        closeView(showProduct);
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
function showProductChargeData(product) {
    // Imágenes
    showProductImgAvif.srcset = product.image_1;
    showProductImgWebp.srcset = product.image_2;
    showProductImgJpg.src = product.image_3;
    // Precio
    showProductPrice.textContent = `${product.price}€`;
    // Nombre
    showProductName.textContent = product.name;
};
function updateCartAmount() {
    console.log('+1');
};