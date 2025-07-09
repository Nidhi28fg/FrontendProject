let a: number | string = 10;
 a = "Harkirat";
console.log(a);
//typescript is a superset of javascript.
function greet(firstName: string, lastName: string) {
    return "Hello" + (firstName) + (lastName);
}

console.log(greet("Harkirat", "Singh"));


function add(add1: number, aab: number) {
    return add1 + aab;
}

function add1(a: number, b: number) {
    return a + b;
}

function aab(a: number, b: number) {
    return a +b;
}

add1(10, 20);
aab(10,20);



console.log(add(add1(10, 20), aab(10,20)));


let isAdult: boolean = false;
let childage: number = 10;
if (childage > 18) {
    isAdult = true;
} else {
    isAdult = false;
}

function callback(fn: () => void){
    setTimeout(fn, 500);
}

function fn(){
    console.log("Hello");
}

