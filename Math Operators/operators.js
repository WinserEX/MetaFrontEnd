//Task 1: Using the logical && operator

let score = 8;
let compare = score > 0 && score < 10;
console.log("Mid-level skills: " + compare);

// Task 2: Using the logical || operator

let timeRemaining = 0;
let energy = 10;
let result = timeRemaining == 0 || energy ==0;
console.log("Game over: " + result)

//Task 3: Using the modulus operator, %, to test if a given number is odd

let num1 = 2;
let num2 = 5;
let test1 = num1 % 2;
let test2 = num2 % 2
let result1 = test1 == 0
let result2 = test2 == 0

console.log(`Is ${num1} an even number? ${result1}`)
console.log(`Is ${num2} an even number? ${result2}`)

//Task 4: Add numbers using the + operator
console.log(5 + 10);

//Task 5: Concatenation using the + operator
let now = "Now in "
let three = 3
let d = "D!"

console.log(now + three + d)

//Task 6: Use the += operator to accumulate values in a variable
let counter = 0;
counter += 5
counter += 3
console.log(counter);

