
import path from 'path'; 
import { fileURLToPath } from 'url';
import colors from 'colors'; 

import { add, subtract, multiply, divide } from './my_module/calculator.js';

const __filename = fileURLToPath(import.meta.url);

console.log("Current file:".yellow, path.basename(__filename));

const a = 100
const b = 4

console.log(`\nCalculations for a = ${a} and b = ${b}\n`);

console.log("Addition:".yellow, add(a, b));
console.log("Subtraction:".magenta, subtract(a, b));
console.log("Multiplication:".blue, multiply(a, b));
console.log("Division:".green, divide(a, b));
