// -- Show product -- //

// Link apertura en la línea 57 del archivo "dataBase" //
const showProductCloseLinkHTML = document.querySelector('#close-show-product')
const showProductHTML = document.querySelector('#show-product');

const showProductImgAvifHTML = document.querySelector('#show-product-img--avif');
const showProductImgWebpHTML = document.querySelector('#show-product-img--webp');
const showProductImgJpgHTML= document.querySelector('#show-product-img--jpg');
const showProductIdHTML = document.querySelector('#show-product-id');
const showProductPriceHTML = document.querySelector('#show-product-price');
const showProductNameHTML = document.querySelector('#show-product-name');
const showProductAmountHTML = document.querySelector('#show-product-amount');
const showProductAddtoCartLinkHTML = document.querySelector('#add-to-cart--aside');


document.addEventListener('DOMContentLoaded', e => {
    
    // Evento apertura ShowProduct en la línea 57 del archivo dataBase //
    
    showProductCloseLinkHTML.addEventListener('click', e => {

        closeView(showProductHTML)

    });
    
    showProductAmountHTML.addEventListener('change', e => {

        const amount = Number(e.target.value);
        const product = listProducts.find( product => product.id == showProductIdHTML.textContent);
        updateProductAmount(product, amount);

    });
    
    showProductAddtoCartLinkHTML.addEventListener('click', e => {

        const product = listProducts.find( product => product.id == showProductIdHTML.textContent);
        const amount = Number(showProductAmountHTML.value);
        updateProductAmount(product, amount);
        addToCart(product);
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



