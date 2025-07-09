"use strict";
let a = 10;
a = "Harkirat";
console.log(a);
//typescript is a superset of javascript.
function greet(firstName, lastName) {
    return "Hello" + (firstName) + (lastName);
}
console.log(greet("Harkirat", "Singh"));
function add(add1, aab) {
    return add1 + aab;
}
function add1(a, b) {
    return a + b;
}
function aab(a, b) {
    return a + b;
}
add1(10, 20);
aab(10, 20);
console.log(add(add1(10, 20), aab(10, 20)));
