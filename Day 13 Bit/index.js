const x = 0;
console.log(x);
//bit - 0 0r 1

const y = 202;
console.log(y);
//byte - 10101011 8bit is byte 
// smallest value 0
// highest value 255

const bytes = [202, 0, 2, 23]
console.log(bytes); 


//UInt8Array 
// A better way to represent an array of bytes is to use a UInt8Array in JS
let byytes = new Uint8Array([202, 0, 2, 23]);
console.log (byytes);