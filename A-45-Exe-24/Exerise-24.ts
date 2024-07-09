let fruitName="orange";

// Tests for equality and inequality with strings
console.log("\n Is fruitName equal to orange?");
console.log(fruitName == "orange");

console.log("\n Is fruitName  inequal to orange?");
console.log(fruitName != "orange");
console.log('-----------------------');

// Tests using the lower case function
let upperCaseOrange="ORANGE";

console.log("\n Is ORANGE equal to orange after convert to lowercase?");
console.log(upperCaseOrange.toLowerCase() == "orange"); 

console.log("\n Is ORANGE not equal to orange after convert to lowercase");
console.log(upperCaseOrange.toLowerCase() != "orange");

console.log('----------------');

// Numerical Tests
let five=5;
let ten=10;
// equal to
console.log("\n Is five equal to ten?") ;
console.log(five == ten);

// not equal to
console.log("\n Is five not equal to ten?");
console.log(five != ten);

// greater than 
console.log("\n Is five greater than zero?");
console.log(five > 0); 
 
// less than
console.log("\n Is ten less than to five?");
console.log(ten < 5);

// greater than or equal to
console.log("\n Is five greater than or equal to 5?");
console.log(five >= 5);

// less than or equal to
console.log("\n Is ten less than or equal to 5?");
console.log(10 <= 10);

// Tests using "and" and "or" operators
// use and operator
console.log("\n Is ten not equal to 5 and ten is greater than 5?");
console.log(ten != 5 && ten > 5);

console.log("\n Is ten equal to 20 and ten is greater than 20?");
console.log(ten != 20 && ten > 20); 
//use or opertor
console.log("\n Is ten greater than 50 or ten is equal to 10?");
console.log(10 > 50 || 10 ==10);

console.log("\n Is ten greater than 50 or ten is not equal to 10?");
console.log(10 > 50 || 10 != 10);

console.log('----------------------'); 

// Test whether an item is in a array 
let cars=["Toyota","BMW","Mercedes"];

console.log("\n Is 'Toyota' inciude in cars array?");
console.log(cars.includes("Toyota")); 

// Test whether an item is not in a array
console.log("\n Is 'Mercedes' not include in cars array?");
console.log(!cars.includes("Mercedes"));





















