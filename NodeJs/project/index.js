console.log("hello nodejs module");

// 다른 사람이 만든 npm => npmjs


const randomColor = require('randomcolor'); // import the script
const color = randomColor(); // a hex code for an attractive color

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1);
console.log(color2);
console.log(color3);