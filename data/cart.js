import { products } from "./product.js";

export const cart = [{
    productId: '1',
    quantity: 1
},{
    productId: '2',
    quantity: 2
}]

export function addToCart (productId) {
     let matchingItem;

        cart.forEach((cartItem) => {
            if(productId === cartItem.productid){
                matchingItem += cartItem;
            }
        });
        
        if(matchingItem){
            matchingItem.quantity += 1;
        }else {
            cart.push({
            productId: productId,
            quantity: 1
        });
    }
}