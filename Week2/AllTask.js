// Code By - Devansh Mittal (21MIM10058)
// Javascript Assignment - Week 2 - Task

// Q 1
let age = 25;
let isAdult = age >= 18;

// Q 2
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

//  Q 3
let n = 7; 
let isEven = (n % 2 === 0);

// Q 4
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
    numbersArray.push(i);
}

// Q 5
function square(num) {
    return num * num;
}

// Output
console.log("Age:", age);
console.log("Is Adult:", isAdult);
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);
console.log("Number:", n, "Is Even:", isEven);
console.log("Numbers Array:", numbersArray);
console.log("Square of 4:", square(4)); 