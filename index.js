"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = 100.99;
name.toFixed();
console.log(name);
var myFun = function (num) {
    return ''; //THIS FUNCTION GIVE AS STRING THEN NEEDS TO RETURN A STRING ATLEAT AN EMPTY STRING
};
function errorFind(err) {
    console.log(err); //if nothing is to return fron function that will be a void function
}
function toThrow(err) {
    throw new Error(err);
}
function userData(details) {
    return { name: "", age: 29 };
}
console.log(userData({ name: 'shinto', age: 25 }));
