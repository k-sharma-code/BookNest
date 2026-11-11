export let cart = JSON.parse(localStorage.getItem('booknestCart'));

if(!cart) {
    cart = [{
        productId: '1',
        quantity: 1
    },{
        productId: '2',
        quantity: 2
    }]
};


function saveToStorage() {
    localStorage.setItem('booknestCart' , JSON.stringify(cart))
}

export function addToCart (productId) {
     let matchingItem;
        
        cart.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
        
        if(matchingItem){
            matchingItem.quantity +=1;
        }else {
            cart.push({
            productId: productId,
            quantity: 1
        });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();

}

export function updateCartQuantity() {
     let cartQuantity = calculateCartQty();

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

export function calculateCartQty () {
     let cartQuantity = 0;
        
        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });

    return cartQuantity;
}