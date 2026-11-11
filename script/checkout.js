import { calculateCartQty, cart ,removeFromCart , updateCartQuantity} from "../data/cart.js";
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
     <article class="cart-item js-cart-item-${matchingProduct.id}">
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
                    <button type="button" class="remove-btn js-remove-btn" data-product-id = "${matchingProduct.id}"><i class="fa-solid fa-trash"></i> Remove</button>
                </div>
            </div>
            <p class="cart-item-total">&#8377;${matchingProduct.price*cartItem.quantity}</p>
        </article>
    `
});

document.querySelector('.js-cart-items').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-remove-btn')
    .forEach((btn) => {
        btn.addEventListener('click', () => {
            const productId = btn.dataset.productId;
            removeFromCart(productId);
            updateCartQty();

            const container = document.querySelector(`
               .js-cart-item-${productId}
            `);
            
            container.remove();
            updateCartQuantity();
            
        });
    });
updateCartQuantity();

function updateCartQty() {
    let cartQuantity = calculateCartQty(); 
    document.querySelector('.js-cart-heading-count').innerHTML = `( ${cartQuantity} Items )`
} 

updateCartQty();
