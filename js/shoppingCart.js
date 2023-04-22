// VARIABLES
const shoppingCartLinkHTML = document.querySelector('#link-shopping-cart');
const shoppingCartHTML = document.querySelector('#shopping-cart');

const shoppingCartTotalAmountHTML = document.querySelector('#shopping-cart-total-amount');
const shoppingCartTotalPricetHTML = document.querySelector('#shopping-cart-total-price');

const shoppingCartResetHTML = document.querySelector('#reset-cart');


// ADDEVENTLISTENERS
document.addEventListener('DOMContentLoaded', e => {

    shoppingCartLinkHTML.addEventListener('click', e => {
        toggleMenu(shoppingCartHTML);
    });

});


// FUNCTIONS
let listShoppingCart = [];
function addToCart(product) {

    const cartProduct = { ...product };
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
    
    listShoppingCart.forEach( product => {
        createArticle(product);
    });
};

let amountHTML;
let listArticleId = [];
function createArticle(article) {
    
    if (!listArticleId.includes(article.id)) {
        
        listArticleId.push(article.id);
        
        const divArticlesHTML = document.querySelector('#div-articles');
        
        const articleHTML = document.createElement('div');
        articleHTML.classList.add('article');
        divArticlesHTML.appendChild(articleHTML);
        
        const infoLeftHTML = document.createElement('div');
        infoLeftHTML.classList.add('article__info-left');
        articleHTML.appendChild(infoLeftHTML);
        
        const figureHTML = document.createElement('figure');
        figureHTML.classList.add('article__image');
        infoLeftHTML.appendChild(figureHTML);
        
        const pictureHTML = document.createElement('picture');
        figureHTML.appendChild(pictureHTML);
        
        const sourceHTML1 = document.createElement('source');
        sourceHTML1.setAttribute('src', article.image_1);
        sourceHTML1.setAttribute('type', 'image/avif');
        pictureHTML.appendChild(sourceHTML1);
        
        const sourceHTML2 = document.createElement('source');
        sourceHTML2.setAttribute('src', article.image_2);
        sourceHTML2.setAttribute('type', 'image/webp');
        pictureHTML.appendChild(sourceHTML2);
        
        const imgHTML = document.createElement('img');
        imgHTML.classList.add('product__img');
        imgHTML.setAttribute('src', article.image_3);
        imgHTML.setAttribute('width', '100');
        imgHTML.setAttribute('height', '100');
        imgHTML.setAttribute('alt', 'imagen producto');
        pictureHTML.appendChild(imgHTML);
        
        const infoLeftRightHTML = document.createElement('div');
        infoLeftRightHTML.classList.add('article__info-left-right');
        infoLeftHTML.appendChild(infoLeftRightHTML);
        
        const nameHTML = document.createElement('p');
        nameHTML.classList.add('article__name');
        nameHTML.textContent = article.name;
        infoLeftRightHTML.appendChild(nameHTML);
        
        const infoAmountHTML = document.createElement('div');
        infoAmountHTML.classList.add('article__info-amount');
        infoLeftRightHTML.appendChild(infoAmountHTML);
        
        amountHTML = document.createElement('p');
        amountHTML.classList.add('article__amount');
        amountHTML.textContent = `x${article.amount}`;
        infoAmountHTML.appendChild(amountHTML);
        
        const changeAmountHTML = document.createElement('div');
        changeAmountHTML.classList.add('article__amount-change');
        infoAmountHTML.appendChild(changeAmountHTML);
        
        const plusImgHTML = document.createElement('img');
        plusImgHTML.classList.add('article__amount-icon', 'article__amount-icon--plus');
        plusImgHTML.setAttribute('src', 'src/assets/icon/icon_plus.svg');
        plusImgHTML.setAttribute('width', '15');
        plusImgHTML.setAttribute('height', '15');
        plusImgHTML.setAttribute('alt', 'sumar unidad de producto');
        changeAmountHTML.appendChild(plusImgHTML);
        plusImgHTML.addEventListener('click', e => {
            updateArticleAmount('plus', article);
            updateAmountHTML(article.amount, amountHTML)
            updateShoppingCartTotalAmount('plus', 1);
            updateShoppingCartTotalPrice('plus', article.price);
        });
        
        const minusImgHTML = document.createElement('img');
        minusImgHTML.classList.add('article__amount-icon', 'article__amount-icon--minus');
        minusImgHTML.setAttribute('src', 'src/assets/icon/icon_minus.svg');
        minusImgHTML.setAttribute('width', '15');
        minusImgHTML.setAttribute('height', '15');
        minusImgHTML.setAttribute('alt', 'sumar unidad de producto');
        changeAmountHTML.appendChild(minusImgHTML);
        minusImgHTML.addEventListener('click', e => {
            if (article.amount === 1) {
                miniAlert();
                return;
            }
            updateArticleAmount('minus', article);
            updateShoppingCartTotalAmount('minus', 1);
            updateShoppingCartTotalPrice('minus', article.price);
            updateAmountHTML(article.amount, amountHTML);
        });
        
        const infoRightHTML = document.createElement('div');    
        infoRightHTML.classList.add('article__info-right');
        articleHTML.appendChild(infoRightHTML);
        
        const priceHTML = document.createElement('div');
        priceHTML.classList.add('article__price', 'article__price--cart');
        priceHTML.textContent = `${article.price}€`;
        infoRightHTML.appendChild(priceHTML);
        
        const removeHTML = document.createElement('a');
        removeHTML.classList.add('article__remove');
        removeHTML.setAttribute('href', '#');
        infoRightHTML.appendChild(removeHTML);
        
        const removeImgHTML = document.createElement('img');
        removeImgHTML.setAttribute('src', 'src/assets/icon/icon_close.png');
        removeImgHTML.setAttribute('width', '15');
        removeImgHTML.setAttribute('height', '15');
        removeImgHTML.setAttribute('alt', 'desechar producto');
        removeHTML.appendChild(removeImgHTML);
        removeHTML.addEventListener('click', e => {
            articleHTML.remove();
            updateShoppingCartTotalPrice('minus', article.totalPrice());
            updateShoppingCartTotalAmount('minus', article.amount);
            updateListArticleId(article.id);
            updateListShoppingCart(article.id);;
            resetArticleAmount(article);
        });
        
        
        function miniAlert() {
            removeHTML.classList.add('mini-alert');
            setTimeout(() => {
                removeHTML.classList.remove('mini-alert');
            }, 1500);
        };
        
        shoppingCartResetHTML.addEventListener('click', e => {
            listProducts.forEach( product => {
                if (listArticleId.includes(product.id)) {
                    articleHTML.remove();
                    resetShoppingCartTotalAmount();
                    resetShoppingCartTotalPrice();
                    resetListShoppingCart();
                    updateListArticleId(product.id, listArticleId);
                }
            });
        });
        
    } else {
        updateAmountHTML(article.amount, amountHTML);
    }

};

function updateAmountHTML(amount, amountHTML) {
    amountHTML.textContent = `x${amount}`;
};
function updateArticleAmount(action, article) {
    console.log(article);
    if (action === 'plus') {
        article.amount += 1;
    } else if (action === 'minus') {
        article.amount -= 1;
    }
};
function resetArticleAmount(article) {
    article.amount = 0
};


let totalPrice = 0;
function updateShoppingCartTotalPrice(action, productTotalPrice) {
    if(action == 'plus') {
        totalPrice += productTotalPrice;
    } else if (action == 'minus') {
        if (totalPrice - productTotalPrice <= 0) {
            shoppingCartTotalPricetHTML.textContent = '';
            totalPrice -= productTotalPrice;
            return;
        }
        totalPrice -= productTotalPrice;
    }
    shoppingCartTotalPricetHTML.textContent = `${totalPrice}€`;
};
function resetShoppingCartTotalAmount() {
    shoppingCartTotalAmountHTML.textContent = '+';
};


let totalAmount = 0;
function updateShoppingCartTotalAmount(action, productAmount) {
    if(action == 'plus') {
        totalAmount += productAmount;
    } else if (action == 'minus') {
        if (totalAmount - productAmount <= 0) {
            shoppingCartTotalAmountHTML.textContent = '+';
            totalAmount -= productAmount;
            return;
        }
        totalAmount -= productAmount;
    }
    shoppingCartTotalAmountHTML.textContent = totalAmount;
};
function resetShoppingCartTotalPrice() {
    shoppingCartTotalPricetHTML.textContent = '';
};


function updateListArticleId(id) {
    listArticleId = listArticleId.filter(element => element != id);
};
function resetListArticleId() {
    listArticleId = [];
}


function updateListShoppingCart(id) {
    listShoppingCart = listShoppingCart.filter(article => article.id != id);
};
function resetListShoppingCart() {
    listShoppingCart = [];
};