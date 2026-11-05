
let productHTML = '';
products.forEach((product) => {
    productHTML += `
         <div class="book-card">
            <img src="${product.image}">
            <div class="book-info">
                <h3>${product.name}</h3>
                <p class="author">${product.author}</p>
                <p>&#8377;${product.price}</p>
                <button><i class="fa-solid fa-cart-plus"></i>Add to Cart</button>
            </div>
        </div>
    `;
});

document.querySelector('.js-product-grid').innerHTML = productHTML;
