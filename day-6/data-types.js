// String
const myString = "Hello, JavaScript!";
console.log("String:", myString);

// Number
const myNumber = 42;
console.log("Number:", myNumber);

// Boolean
const isJavaScriptFun = true;
console.log("Boolean:", isJavaScriptFun);

// Undefined
let myUndefined;
console.log("Undefined:", myUndefined);

// Null
const myNull = null;
console.log("Null:", myNull);

// Array
const myArray = [1, 2, 3, 4, 5];
console.log("Array:", myArray);

// Date
const myDate = new Date();
console.log("Date:", myDate);

// Map
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 30);
console.log("Map:");
myMap.forEach((value, key) => {
  console.log(`  ${key}: ${value}`);
});

// Set
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log("Set:");
mySet.forEach((value) => {
  console.log(`  ${value}`);
});
