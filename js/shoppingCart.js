// VARIABLES
const linkShoppingCartHTML = document.querySelector('#link-shopping-cart');
const shoppingCartHTML = document.querySelector('#shopping-cart');

const shoppingCartTotalAmounttHTML = document.querySelector('#shopping-cart-total-amount');
const shoppingCartTotalPricetHTML = document.querySelector('#shopping-cart-total-price');



// ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', e => {

    linkShoppingCartHTML.addEventListener('click', e => {
        toggleMenu(shoppingCartHTML);
    });

});


// FUNCIONES

let totalPrice = 0;
function updateShoppingCartTotalPrice(action, productTotalPrice) {
    if(action == 'plus') {
        totalPrice += productTotalPrice;
    } else if (action == minus) {
        totalPrice -= productTotalPrice;
    }
    shoppingCartTotalPricetHTML.textContent = `${totalPrice}€`;
};

let totalAmount = 0;
function updateShoppingCartTotalAmount(action, productAmount) {
    if(action == 'plus') {
        totalAmount += productAmount;
    } else if (action == minus) {
        totalAmount -= productAmount;
    }
    shoppingCartTotalAmounttHTML.textContent = totalAmount;
};



// LISTA DE OBJETOS DEL CARRITO
const listShoppingCart = [];

async function updateShoppingCartList(product) {
    listShoppingCart.push(product);       
    console.log(listShoppingCart);
    const totalPrice = product.totalPrice();
    const amount = product.amount;
    updateShoppingCartTotalPrice('plus', totalPrice);
    updateShoppingCartTotalAmount('plus', amount);
    
};

function addToCart(product) {

}


