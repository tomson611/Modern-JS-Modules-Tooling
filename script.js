//Importing module
// import { addToCart, tq, totalPrice as price } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
// console.log('Importing module');

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add from './shoppingCart.js';
// add('pizza', 2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return addToCart, cart, totalPrice, totalQuantity;
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);

// Export
export.function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
      };

//Import
const { addTocart} = require('./shoppingCart.js')