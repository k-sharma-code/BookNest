import { cart } from "../data/cart.js";
import { products } from "../data/product.js";

let cartSummaryHTML ='';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;
    products.forEach((product) => {
        if(product.id === productId){
            matchingProduct = product;
        };
    });

    cartSummaryHTML +=`
     <article class="cart-item">
            <img class="cart-item-img" src="${matchingProduct.image}">
            <div class="cart-item-info">
                <h3 class="cart-item-name">${matchingProduct.name}</h3>
                <p class="cart-item-author">${matchingProduct.author}</p>
                <p class="cart-item-price">&#8377;${matchingProduct.price}</p>
                <div class="cart-item-actions">
                    <div class="qty-control">
                        <button type="button" class="qty-btn" aria-label="Decrease quantity">&minus;</button>
                        <span class="qty-value">${cartItem.quantity}</span>
                        <button type="button" class="qty-btn" aria-label="Increase quantity">+</button>
                    </div>
                    <button type="button" class="remove-btn"><i class="fa-solid fa-trash"></i> Remove</button>
                </div>
            </div>
            <p class="cart-item-total">&#8377;299</p>
        </article>
    `
});

document.querySelector('.js-cart-items').innerHTML = cartSummaryHTML;

