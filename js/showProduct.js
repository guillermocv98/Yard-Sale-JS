// -- Show product -- //

// Link apertura en la línea 6 de la inserción del HTML //
const linkCloseShowProductHTML = document.querySelector('#close-show-product')
const showProductHTML = document.querySelector('#show-product');

const showProductImgAvifHTML = document.querySelector('#show-product-img--avif');
const showProductImgWebpHTML = document.querySelector('#show-product-img--webp');
const showProductImgJpgHTML= document.querySelector('#show-product-img--jpg');
const showProductPriceHTML = document.querySelector('#show-product-price')
const showProductNameHTML = document.querySelector('#show-product-name')

const linkAddToCartAsideHTML = document.querySelector('#add-to-cart--aside');

document.addEventListener('DOMContentLoaded', e => {

    // Evento apertura ShowProduct en la línea 6 de la inserción del HTML //
    
    linkCloseShowProductHTML.addEventListener('click', e => {
        closeView(showProductHTML)
    });
    
    linkAddToCartAsideHTML.addEventListener('click', e => {
        closeView(showProductHTML);
    }); 

});



function showProductChargeData(product) {
    // Imágenes
    showProductImgAvifHTML.srcset = product.image_1;
    showProductImgWebpHTML.srcset = product.image_2;
    showProductImgJpgHTML.src = product.image_3;
    // Precio
    showProductPriceHTML.textContent = `${product.price}€`;
    // Nombre
    showProductNameHTML.textContent = product.name;
};
function updateCartAmount() {
    console.log('+1');
};