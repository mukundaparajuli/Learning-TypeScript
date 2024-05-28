"use strict";
const score = [];
// can accept either number or a boolean and can return either a number or a boolean independent of the type of the argument
function identityOne(val) {
    return val;
}
// can accept any type of data and can return any type of data
const identityTwo = (val) => {
    return val;
};
// can accept an argument of any type and returns that of the same type
function identityThree(val) {
    return val;
}
//
function identityFour(val) {
    return val;
}
identityThree("3");
identityFour({ brand: "test", price: 210 });
// generics and arrays
function identityFive(val) {
    const index = 3;
    return val[index];
}
function identitySix(val) {
    return val[4];
}
// generics with arrow functions
const identitySeven = (val) => {
    return val;
};
const identityEight = (val) => {
    return val[4];
};
const identityNine = (valOne, valTwo) => {
    return {
        valOne,
        valTwo,
    };
};
identityNine("3", {
    name: "Mukunda",
    age: 21,
    email: "m@m.com",
    phone: 9849951810, //through this was not defined in the interface of database we can use
    //                   this bcoz database is just the extention of the type U
});
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
