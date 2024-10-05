// 1. Create two variable and practice arithmetic operation
// 2. Write a function that takes an integer minite and convert it seconds?
// 3. Create two variable and return its area.
// 4. Create a variable that takes tha age in years and returns the age in day.

// 1. Arithmetic operator
let num = 1010;
let num1 = 2020;
let num2 = 3030;

let addition = num + num1;
let sum = num + num1 + num2;
let multiplication = num * num1;
let subtraction = num1 - num;
let division = num / num1;
let modulus = num1 % num;
let exponentiation = num1 ** num;

console.log("Addition is : " + addition);
console.log("The sum is: " + sum);
console.log("Multiply is : " + multiplication);
console.log("Subtraction is : " + subtraction);
console.log("Division is : " + division);
console.log("Modulus is : " + modulus);
console.log("Exponention is: " + exponentiation);
console.log("Arithmetic Operators End.");

// 2. Write a function that takes an integer minite and convert it seconds?
let now = new Date();
let minutes = now.getMinutes();
let convertsecond = minutes * 60;

console.log("Current Minutes: " + minutes + "m");
console.log("Minutes to Seconds: " + convertsecond + "s");

// 3. Create two variable and return its area.
let length = 20;
let width = 30;
let area = length * width;

console.log("Area : " + area + "m");

// 4. Create a variable that takes tha age in years and returns the age in day.
function ageToday() {
  let age = prompt("Please enter your age: ");

  let ageInYears = parseInt(age);

  if (!isNaN(ageInYears)) {
    let ageInDays = ageInYears * 365;
    alert("You are " + ageInDays + " days old.");
  } else {
    alert("Please enter a valid number!");
  }
}

ageToday();
