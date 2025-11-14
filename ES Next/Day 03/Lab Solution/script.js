async function fetchData() {
    let productsData = await fetch("https://fakestoreapi.com/products");

    let products = await productsData.json();

    return products;
}

let marketContainer = document.querySelector(".market-container");
fetchData().then((marketProducts) => {
    marketProducts.forEach((product) => {
        let productContainer = document.createElement("div");
        productContainer.classList.add('product');

        let productImgContainer = document.createElement('div');
        productImgContainer.classList.add('product-img');
        let productImg = document.createElement('img');
        productImg.src = product.image;
        productImgContainer.appendChild(productImg);

        let productHeader = document.createElement('h2');
        productHeader.classList.add('product-header');
        productHeader.innerText = product.title;

        let productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.innerText = "Price: ";
        let productPriceValue = document.createElement('span');
        productPriceValue.innerText = product.price + "$";
        productPrice.appendChild(productPriceValue);

        let productAddToCartBtn = document.createElement('button');
        productAddToCartBtn.classList.add('product-add-to-cart');
        productAddToCartBtn.innerText = "Add to Cart";
        productAddToCartBtn.dataset["productContent"] = JSON.stringify(product);

        productContainer.appendChild(productImgContainer);
        productContainer.appendChild(productHeader);
        productContainer.appendChild(productPrice);
        productContainer.appendChild(productAddToCartBtn);

        marketContainer.appendChild(productContainer);
    })

    let productsAtCart = new Map();
    let btnCartProduct = document.querySelectorAll('.product-add-to-cart');
    btnCartProduct.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let currentProductBtn = e.target;
            let currentProductContent = JSON.parse(currentProductBtn.dataset["productContent"]);


            if (productsAtCart.has(currentProductContent.id)) {
                productsAtCart.get(currentProductContent.id).count++;
            } else {
                productsAtCart.set(currentProductContent.id, { obj: currentProductContent, count: 1 })
            }

            const productsMapAsArray = Array.from(productsAtCart.entries());
            localStorage.setItem('products', JSON.stringify(productsMapAsArray));
        });
    })

    let cartPage = document.querySelector('#cart');
    cartPage.addEventListener('click', (event) => {
        event.view.location.pathname = "./cartPage.html";
    })


    // console.log(productsAtCart);
}, () => { console.log("Failed to load products.") });





