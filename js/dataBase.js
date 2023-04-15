// BASE DE DATOS
document.addEventListener('DOMContentLoaded', () => {
    
    // Variables
    const productList = [];
    const divProducts = document.querySelector('#grid-products');
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dignissimos praesentium alias atque laudantium! Nam eligendi doloribus architecto error maxime!';


    // Crear base de datos
    let price = 120;
    for(let i = 1; i <= 15; i++) {
        createProduct(`Laptop ${i}`, price, i, description);
        price += 20;
    }
    function createProduct(name, price, index, description) {
        productList.push({
            name: name,
            price: price,
            image_1: `build/img/product-${index}.avif`,
            image_2: `build/img/product-${index}.webp`,
            image_3: `build/img/product-${index}.jpg`,
            icon: 'src/assets/icon/add-to-cart.svg',
            description: description
        });
    };


    // Insertar en el html
    productList.forEach(product => {
        divProducts.querySelector('#grid-products');

        const producto = document.createElement('div');
        producto.classList.add('product');
        divProducts.appendChild(producto);
        
        const picture = document.createElement('picture');
        producto.appendChild(picture);
        
        const source1 = document.createElement('source');
        source1.setAttribute('src', product.image_1);
        source1.setAttribute('type', 'image/avif');
        picture.appendChild(source1);
        
        const source2 = document.createElement('source');
        source2.setAttribute('src', product.image_2);
        source2.setAttribute('type', 'image/webp');
        picture.appendChild(source2);
        
        const img = document.createElement('img');
        img.classList.add('product__img');
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

        const info = document.createElement('div');
        info.classList.add('product__info');
        producto.appendChild(info);

        const data = document.createElement('div');
        data.classList.add('product__data');
        info.appendChild(data);

        const price = document.createElement('p');
        price.classList.add('product__price');
        price.textContent = `${product.price}€`;
        data.appendChild(price);

        const name = document.createElement('p');
        name.classList.add('product__name');
        name.textContent = product.name;
        data.appendChild(name);

        const formAmount = document.createElement('form');
        formAmount.classList.add('product__form-amount');
        info.appendChild(formAmount);

        const amount = document.createElement('input');
        amount.classList.add('product__amount');
        amount.setAttribute('type', 'number');
        amount.setAttribute('min', '1');
        amount.setAttribute('value', '1');
        formAmount.appendChild(amount);

        const addCartContent = document.createElement('div');
        addCartContent.classList.add('product__add-cart');
        info.appendChild(addCartContent);

        const AddCartLink = document.createElement('a');
        AddCartLink.classList.add('product__add-cart__link');
        addCartContent.appendChild(AddCartLink);

        const addCartImg = document.createElement('img');
        addCartImg.classList.add('product__add-cart__img');
        addCartImg.setAttribute('src', product.icon);
        addCartImg.setAttribute('widht', '30');
        addCartImg.setAttribute('height', '30');
        addCartImg.setAttribute('alt', 'añadir al carrito');
        AddCartLink.appendChild(addCartImg);
    });
});