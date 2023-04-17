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

function updateShoppingCartList(product) {
    const cartProduct = { ... product};
    if (!listShoppingCart.some( article => article.id == cartProduct.id)) {
        listShoppingCart.push(cartProduct);       
    } else {
        const article = listShoppingCart.find( article => article.id == cartProduct.id);
        article.amount += cartProduct.amount;
    }
    const totalPrice = cartProduct.totalPrice();
    const amount = cartProduct.amount;
    updateShoppingCartTotalPrice('plus', totalPrice);
    updateShoppingCartTotalAmount('plus', amount);
    addToCart(listShoppingCart);
};

function addToCart(x) {
    console.log(x)
};


