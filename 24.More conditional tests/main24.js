"use strict";
let apple = "apple";
let upperCaseApple = "APPLE";
let fruits = ["apple", "banana", "orange"];
//  test for equality & inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple"); //true
console.log("is apple is not equal to apple?");
console.log(apple != "apple"); //false
//test using lowercase function
console.log("is Apple is equal to apple after convverting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");
console.log("is APPLE is not equal to apple after converting to lowerCase");
console.log(upperCaseApple.toLowerCase() != "apple");
let ten = 10;
let twenty = 20;
//numerical tests
console.log("is ten is equal to twenty?");
console.log(ten == twenty);
console.log("is ten not equal to twenty?");
console.log(ten != twenty);
console.log("is ten is greater than zero?");
console.log(ten > 0);
console.log("is twenty is less than 10?");
console.log(twenty < 10);
console.log("is ten is greater than or equal to 5?");
console.log(ten >= 10);
console.log("is twenty is less than or equal to 10?");
console.log(twenty <= 10);
// tests using "and" operator
console.log("twenty is not equal to 10 & twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("twenty is not equal to 10 & twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// tests using "or" operator
console.log("20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//tests whether an item is include in array
console.log("is orange include in my fruits array");
console.log(fruits.includes("orange"));
//not include
console.log("is orange not include in my fruits array");
console.log(!fruits.includes("orange"));
