// Basic JavaScript Outputs
window.alert('Hello, World!');
console.log(1 + 9);
document.write('Hello, World!');

// Variable Declaration and Initialization
var a; // variable declaration
a = 10; // variable initialization
var b = 20;
var c = a + b;
console.log("Sum of a and b:", c);

// Constant Declaration and Initialization
const x = 10; 
// const y; // Uncommenting this will throw an error: Missing initializer in const declaration

// Block Scope with `let`
let blockScopedVariable = 10;
console.log("Global blockScopedVariable:", blockScopedVariable);

function checkingScope() {
    let blockScopedVariable = 1000; // Function-local scope
    console.log("Local blockScopedVariable inside function:", blockScopedVariable);
}
checkingScope();

console.log("Global blockScopedVariable after function call:", blockScopedVariable);

// Hoisting in JavaScript
// console.log(hoistedVar); // Undefined due to hoisting
var hoistedVar = "I am hoisted";

// Uncommenting below line will throw error as `let` and `const` do not hoist variables the same way.
// console.log(nonHoistedVar);
// let nonHoistedVar = "I am not hoisted";

// Type Checking
console.log("Type of null:", typeof null);
console.log("Type of 20:", typeof 20);
console.log("Type of undefined:", typeof undefined);

// String Concatenation
let str1 = "Hello";
let str2 = "World";
let combinedStr = str1 + " " + str2;
console.log("Concatenated string:", combinedStr);

// Prefix and Postfix Increment/Decrement
let a1 = 4;
let b1 = 2;
//       4   +   1 -   4 + 1
let c1 = a1++ + --b1 - --a1 + b1++;
console.log("Result of complex prefix/postfix operation:", c1);

// Comparison Operators
console.log("Loose equality (2 == '2'):", 2 == "2"); // true
console.log("Strict equality (2 === '2'):", 2 === "2"); // false
console.log("Logical NOT (!true):", !true);

// Array Manipulations
let arr = [1, 2, 3, 4, 5];
let removedElements = arr.splice(0, 3); // Removes elements at index 0, 1, 2
console.log("Removed elements using splice:", removedElements);
console.log("Array after splice:", arr);

let arr2 = [1, 2, 3, 4, 5];
let slicedArr = arr2.slice(0, 2); // Extracts elements without modifying original array
console.log("Extracted elements using slice:", slicedArr);
console.log("Original array remains unchanged:", arr2);

// Functions and Their Types

// Regular Function
function multiply(a, b) {
    return a * b;
}
console.log("Multiply function result:", multiply(2, 3));

// Anonymous Function
let sum = function (a, b) {
    return a + b;
};
console.log("Anonymous function result:", sum(2, 3));

// Arrow Function
let subtract = (a, b) => a - b;
console.log("Arrow function result:", subtract(5, 3));

// IIFE (Immediately Invoked Function Expression)
(function (a, b) {
    console.log("IIFE result:", a + b);
})(6, 3);

// Generator Functions

// Fibonacci Sequence
function* fibonacci() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b]; // Destructuring assignment
    }
}
let fib = fibonacci();
console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}

// Generator Function with Parameters
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
console.log("Range using generator:");
for (let num of range(1, 5)) {
    console.log(num);
}

// Additional Examples:

// Arrow Function: Greet
let greet = name => `Hello, ${name}!`;
console.log(greet("John"));

// Generator Function: Squares
function* squares(max) {
    for (let i = 1; i <= max; i++) {
        yield i ** 2;
    }
}
console.log("Squares of numbers using generator:");
for (let sq of squares(5)) {
    console.log(sq);
}
