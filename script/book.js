import{ cart, addToCart , updateCartQuantity} from '../data/cart.js';
import { products } from '../data/product.js';

let productHTML = '';
products.forEach((product) => {
    productHTML += `
         <div class="book-card">
            <img src="${product.image}">
            <div class="book-info">
                <h3>${product.name}</h3>
                <p class="author">${product.author}</p>
                <p>&#8377;${product.price}</p>
                <button class="js-add-to-cart" data-product-id = "${product.id}" ><i class="fa-solid fa-cart-plus"></i>Add to Cart</button>
            </div>
        </div>
    `;
});

document.querySelector('.js-product-grid').innerHTML = productHTML;

// function updateCartQuantity() {
//      let cartQuantity = 0;
        
//         cart.forEach((cartItem) => {
//             cartQuantity += cartItem.quantity;
//         });

//         document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
// }

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            addToCart(productId);
            updateCartQuantity();
        });
    });
updateCartQuantity();