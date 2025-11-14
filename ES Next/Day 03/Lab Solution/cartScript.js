let cartProductsContainer = document.querySelector("#cart-container");
let ourTarget = null;

const productsMap = localStorage.getItem("products");
if (productsMap) {
    let productsAtCart = JSON.parse(productsMap);
    let products = new Map(productsAtCart);

    products.forEach((product) => {
        addCartProduct(product);
    });

    let decreaseBTN = document.querySelector('.minus');
    let increaseBTN = document.querySelector('.plus');

    decreaseBTN.addEventListener('click', (e) => {
        ourTarget = e.target;
        console.log(e.target);
    })

    increaseBTN.addEventListener('click', (e) => {
        ourTarget = e.target;
        console.log(e.target);
    })

    let remvoeProductBtns = document.querySelectorAll(".cart-add-remove-btn");
    remvoeProductBtns.forEach((removeBtn) => {
        removeBtn.addEventListener('click', function (e) {
            let cart = e.target.closest(".cart-product");
            let cartObj = JSON.parse(cart.dataset["cartProductContent"]);

            productsAtCart = productsAtCart.filter((product) => { return product[0] !== cartObj.id });

            let totalPriceContainer = document.querySelector(".total-price-container");
            totalPriceContainer.innerHTML = `<p>Total Price: ${(totalPrice.toFixed(3) - (products.get(cartObj.id).obj.price * products.get(cartObj.id).count)).toFixed(3)}</p>`;

            products.delete(cartObj.id);

            localStorage.setItem('products', JSON.stringify(productsAtCart));

            cart.remove();

            if (products.size === 0) {
                totalPriceContainer.innerHTML = `<p>Your cart is Empty.</p>`;
            }
        })
    })

    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += (product.obj.price * product.count)
    })
    displayTotalPrice(totalPrice);
} else {
    let priceContainer = document.createElement('div');
    priceContainer.classList.add("total-price-container");
    priceContainer.innerHTML = `<p>Your cart is Empty.</p>`;
    cartProductsContainer.appendChild(priceContainer);
    console.log("No Products");
}

function addCartProduct(product) {
    let cartProductContainer = document.createElement('div');
    cartProductContainer.classList.add('cart-product');

    let cartProductDetails = document.createElement('div');
    cartProductDetails.classList.add('cart-product-details');

    let cartProductHeader = document.createElement('h3');
    cartProductHeader.innerText = product.obj.title;

    let cartProductPricingDetails = document.createElement('div');
    cartProductPricingDetails.classList.add('cart-product-pricing-details');
    let cartProductPrice = document.createElement('span');
    cartProductPrice.innerText = "$" + product.obj.price + " x ";
    let minusBTN = document.createElement('button');
    minusBTN.classList.add('minus');
    minusBTN.innerText = "-";
    let cartProductQuantity = document.createElement("span");
    cartProductQuantity.innerText = " " + product.count + " ";
    let addBTN = document.createElement('button');
    addBTN.innerText = "+";
    addBTN.classList.add('plus');
    let cartProductTotalPrice = document.createElement('span');
    cartProductTotalPrice.innerText = " = $" + String((Number(product.obj.price) * Number(product.count)));
    cartProductDetails.appendChild(cartProductHeader);
    cartProductDetails.appendChild(cartProductPrice);
    cartProductDetails.appendChild(minusBTN);
    cartProductDetails.appendChild(cartProductQuantity);
    cartProductDetails.appendChild(addBTN);
    cartProductDetails.appendChild(cartProductTotalPrice);

    let cartProductRemoveBTN = document.createElement('div');
    cartProductRemoveBTN.classList.add('cart-add-remove-btn');
    // console.log(product.obj, JSON.stringify(product.obj));
    // cartProductRemoveBTN.dataset["cartProductContent"] = JSON.stringify(product.obj);
    cartProductRemoveBTN.innerHTML = `<button cartProductContent=${JSON.stringify(cartProductContainer)}>Remove</button>`;

    cartProductContainer.appendChild(cartProductDetails);
    cartProductContainer.appendChild(cartProductRemoveBTN);

    cartProductsContainer.appendChild(cartProductContainer);
    cartProductContainer.dataset["cartProductContent"] = JSON.stringify(product.obj);
}

function displayTotalPrice(totalPrice) {
    let priceContainer = document.createElement('div');
    priceContainer.classList.add("total-price-container");
    priceContainer.innerHTML = `<p>Total Price: ${totalPrice.toFixed(3)}</p>`

    cartProductsContainer.appendChild(priceContainer);
}
