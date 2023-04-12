// VARIABLES

// Desplegables
const linkMenuMobile = document.querySelector('#link-menu--mobile');
const menuMobile = document.querySelector('#menu--mobile');


const linkMenuDesktop = document.querySelector('#link-menu--desktop');
const menuDesktop = document.querySelector('#menu--desktop');


const linkMenuCart = document.querySelector('#link-menu--carrito');
const menuCart = document.querySelector('#menu--carrito');


// -- Show product -- //
// Link apertura en la línea 6 de la inserción del HTML //
const showProduct = document.querySelector('#show-product');
const linkCloseShowProduct = document.querySelector('#close-show-product')

const linkAddToCartAside = document.querySelector('#add-to-cart--aside');


const showProductImgAvif = document.querySelector('#show-product-img--avif');
const showProductImgWebp = document.querySelector('#show-product-img--webp');
const showProductImgJpg= document.querySelector('#show-product-img--jpg');
const showProductPrice = document.querySelector('#show-product-price')
const showProductName = document.querySelector('#show-product-name')


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
    showProductPrice.textContent = product.price;
    // Nombre
    showProductName.textContent = product.name;

};





// BASE DE DATOS
document.addEventListener('DOMContentLoaded', () => {
    
    // Variables
    const productList = [];
    const divProducts = document.querySelector('#grid-productos');
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dignissimos praesentium alias atque laudantium! Nam eligendi doloribus architecto error maxime!';


    // Crear base de datos
    let price = 120;
    for(let i = 1; i <= 15; i++) {
        console.log(price);
        createProduct(`Laptop ${i}`, price, i, description);
        price += 20;
    }
    function createProduct(name, price, index, description) {
        productList.push({
            name: name,
            price: price,
            image_1: `src/img/producto-${index}.avif`,
            image_2: `src/img/producto-${index}.webp`,
            image_3: `src/img/producto-${index}.jpg`,
            icon: 'src/icon/add-to-cart.svg',
            description: description
        });
    };


    // Insertar en el html
    productList.forEach(product => {
        const producto = document.createElement('div');
        producto.classList.add('producto');
        divProducts.appendChild(producto);

        const figure = document.createElement('figure');
        figure.classList.add('producto__imagen');
        producto.appendChild(figure);
        
        const picture = document.createElement('picture');
        figure.appendChild(picture);
        
        const source1 = document.createElement('source');
        source1.setAttribute('src', product.image_1);
        source1.setAttribute('type', 'image/avif');
        picture.appendChild(source1);
        
        const source2 = document.createElement('source');
        source2.setAttribute('src', product.image_2);
        source2.setAttribute('type', 'image/webp');
        picture.appendChild(source2);
        
        const img = document.createElement('img');
        img.classList.add('producto__img');
        img.setAttribute('src', product.image_3);
        img.setAttribute('width', '150');
        img.setAttribute('height', '150');
        img.setAttribute('alt', 'imagen producto');
        picture.appendChild(img);
        // Desplegable vista producto
        img.addEventListener('click', e => {
            openView(showProduct);
            showProductChargeData(product);
        });
        
        const content = document.createElement('div');
        content.classList.add('producto__contenido');
        producto.appendChild(content);

        const info = document.createElement('div');
        info.classList.add('producto__info');
        content.appendChild(info);

        const price = document.createElement('p');
        price.classList.add('producto__precio');
        price.textContent = `${product.price}€`;
        info.appendChild(price);

        const name = document.createElement('p');
        name.classList.add('producto__nombre');
        name.textContent = product.name;
        info.appendChild(name);

        const add_cart = document.createElement('div');
        add_cart.classList.add('producto__add-carrito');
        content.appendChild(add_cart);

        const link = document.createElement('a');
        link.classList.add('producto__add-carrito__link');
        add_cart.appendChild(link);

        const add_img = document.createElement('img');
        add_img.classList.add('producto__add-carrito__img');
        add_img.setAttribute('src', product.icon);
        add_img.setAttribute('widht', '30');
        add_img.setAttribute('height', '30');
        add_img.setAttribute('alt', 'añadir al carrito');
        link.appendChild(add_img);
    });


});


// git commit -am "Adhesión del aside contenedor de la vista ampliada de los productos al index.html, Impletementación de la performance con JS parte 1 (se ha configurado la entrada y salida "