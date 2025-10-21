// A variable named Kelvin
const kelvin = 293;

// Conversion to  celsius
const celsius = kelvin - 273;

// Conversion to Fahrenheit
let fahrenheit = celsius * (9/5) + 32

// Math.floor to avoid decimals
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);