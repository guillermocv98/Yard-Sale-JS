// -- Show product -- //

// Link apertura en la línea 6 de la inserción del HTML //
const linkCloseShowProductHTML = document.querySelector('#close-show-product')
const showProductHTML = document.querySelector('#show-product');

const showProductImgAvifHTML = document.querySelector('#show-product-img--avif');
const showProductImgWebpHTML = document.querySelector('#show-product-img--webp');
const showProductImgJpgHTML= document.querySelector('#show-product-img--jpg');
const showProductIdHTML = document.querySelector('#show-product-id')
const showProductPriceHTML = document.querySelector('#show-product-price');
const showProductNameHTML = document.querySelector('#show-product-name');
const showProductAmountHTML = document.querySelector('#show-product-amount');

const linkAddToCartAsideHTML = document.querySelector('#add-to-cart--aside');

document.addEventListener('DOMContentLoaded', e => {

    // Evento apertura ShowProduct en la línea 6 de la inserción del HTML //
    
    linkCloseShowProductHTML.addEventListener('click', e => {
        closeView(showProductHTML)
    });

    showProductAmountHTML.addEventListener('change', e => {
        // Enlazar el e.value con el de su producto correspondiente.
    });
    
    linkAddToCartAsideHTML.addEventListener('click', e => {
        const product = listProducts.find( product => product.id == showProductIdHTML.textContent);
        updateShoppingCartTotalAmount('plus', product.amount);

        closeView(showProductHTML);
    }); 

});



function showProductChargeData(product) {
    // Id 
    showProductIdHTML.textContent = product.id;
    // Nombre
    showProductNameHTML.textContent = product.name;
    // Precio
    showProductPriceHTML.textContent = `${product.price}€`;
    // Imágenes
    showProductImgAvifHTML.srcset = product.image_1;
    showProductImgWebpHTML.srcset = product.image_2;
    showProductImgJpgHTML.src = product.image_3;
    // Cantidad
    updateShowProductAmount(product.amount);
};
function updateShowProductAmount(amount) {
    showProductAmountHTML.value = amount;
}