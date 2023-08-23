// This variable has a temperature value with unit in kelvin.
const kelvin = 373;

// celsius a variable with temperature value that is 273 less than kelvin and its unit is degree-celsius.
let celsius = kelvin - 273;
// celsius = 29;

// This variable is temperature with unit in fahrenheit and its relation to celsius is as shown below. The Math.floor() method is to ensure the result is 
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit and ${celsius} in degrees celsius.`)