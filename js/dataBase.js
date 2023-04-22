// VARIABLES
const listProducts = [];
const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dignissimos praesentium alias atque laudantium! Nam eligendi doloribus architecto error maxime!';

const divProductsHTML = document.querySelector('#grid-products');


// CREATE DATABASE
let price = 120;
for(let i = 1; i <= 15; i++) {
    createProduct(`AAA-${i}`, `Laptop ${i}`, price, i, description);
    price += 20;
}
function createProduct(id, name, price, index, description) {
    listProducts.push({ // Product
        id: id,
        name: name,
        price: price,
        image_1: `build/img/product-${index}.avif`,
        image_2: `build/img/product-${index}.webp`,
        image_3: `build/img/product-${index}.jpg`,
        icon: 'src/assets/icon/add-to-cart.svg',
        description: description,
        amount: 0,
        totalPrice: function () {
            return this.price * this.amount;
        },
    });
};

// INSERT HTML
listProducts.forEach(product => { 

    const productHTML = document.createElement('div');
    productHTML.classList.add('product');
    divProductsHTML.appendChild(productHTML);
    
    const pictureHTML = document.createElement('picture');
    productHTML.appendChild(pictureHTML);
    
    const sourceHTML1 = document.createElement('source');
    sourceHTML1.setAttribute('src', product.image_1);
    sourceHTML1.setAttribute('type', 'image/avif');
    pictureHTML.appendChild(sourceHTML1);
    
    const sourceHTML2 = document.createElement('source');
    sourceHTML2.setAttribute('src', product.image_2);
    sourceHTML2.setAttribute('type', 'image/webp');
    pictureHTML.appendChild(sourceHTML2);
    
    const imgHTML = document.createElement('img');
    imgHTML.classList.add('product__img');
    imgHTML.setAttribute('src', product.image_3);
    imgHTML.setAttribute('width', '150');
    imgHTML.setAttribute('height', '150');
    imgHTML.setAttribute('alt', 'imagen producto');
    pictureHTML.appendChild(imgHTML);
    // Aside view product
    imgHTML.addEventListener('click', e => {
        
        const amount = Number(e.target.parentElement.parentElement.children[1].children[1].children[0].value);
        showProductChargeData(product);
        updateShowProductAmount(amount);
        openView(showProductHTML);

    });

    const infoHTML = document.createElement('div');
    infoHTML.classList.add('product__info');
    productHTML.appendChild(infoHTML);

    const dataHTML = document.createElement('div');
    dataHTML.classList.add('product__data');
    infoHTML.appendChild(dataHTML);

    const priceHTML = document.createElement('p');
    priceHTML.classList.add('product__price');
    priceHTML.textContent = `${product.price}€`;
    dataHTML.appendChild(priceHTML);

    const nameHTML = document.createElement('p');
    nameHTML.classList.add('product__name');
    nameHTML.textContent = product.name;
    dataHTML.appendChild(nameHTML);

    const formAmountHTML = document.createElement('form');
    formAmountHTML.classList.add('product__form-amount');
    infoHTML.appendChild(formAmountHTML);

    const amountHTML = document.createElement('input');
    amountHTML.classList.add('product__amount');
    amountHTML.setAttribute('type', 'number');
    amountHTML.setAttribute('min', '1');
    amountHTML.setAttribute('value', '1');
    formAmountHTML.appendChild(amountHTML);
    amountHTML.addEventListener('change', e => {

        const amount = Number(e.target.value);
        updateShowProductAmount(amount);

    });

    const addCartContentHTML = document.createElement('div');
    addCartContentHTML.classList.add('product__add-cart');
    infoHTML.appendChild(addCartContentHTML);

    const AddCartLinkHTML = document.createElement('a');
    AddCartLinkHTML.classList.add('product__add-cart__link');
    addCartContentHTML.appendChild(AddCartLinkHTML);
    AddCartLinkHTML.addEventListener('click', e => {
        
        const amount = Number(e.target.parentElement.parentElement.parentElement.children[1].children[0].value);
        updateProductAmount(product, amount);
        addToCart(product);
        updateShowProductAmount(1);
        formAmountHTML.reset();

    });

    const addCartImgHTML = document.createElement('img');
    addCartImgHTML.classList.add('product__add-cart__img');
    addCartImgHTML.setAttribute('src', product.icon);
    addCartImgHTML.setAttribute('widht', '30');
    addCartImgHTML.setAttribute('height', '30');
    addCartImgHTML.setAttribute('alt', 'añadir al carrito');
    AddCartLinkHTML.appendChild(addCartImgHTML);

    document.querySelector('#add-to-cart--aside').addEventListener('click', e => {
        formAmountHTML.reset();
    });

});



// FUNCTIONS
function updateProductAmount(product, amount) {
    product.amount = amount;
};
