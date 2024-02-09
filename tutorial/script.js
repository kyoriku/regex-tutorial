// Example: Lowercase requirement
var regex = /(?=.*[a-z])/;
var passwordLowerCase = "password";
var passwordUpperCase = "PASSWORD";

// Check if password includes a lowercase letter
console.log(regex.test(passwordLowerCase)); // Output: true
console.log(regex.test(passwordUpperCase)); // Output: false

// // Check if password includes a lowercase letter
// console.log(/(?=.*[a-z])/.test(passwordLowercase)); // Output: true
// console.log(/(?=.*[a-z])/.test(passwordUppercase)); // Output: false

// var passwordDigit = 'password123';
// var passwordSpec = 'password!@#';
// var passwordAll = "PassWord123!@#";
// var pswd = "pswd";

// // Check if password includes a digit
// console.log(/(?=.*\d)/.test(passwordDigit)); // Output: true
// console.log(/(?=.*\d)/.test(passwordUppercase)); // Output: false

// // Check if password includes a special character
// console.log(/(?=.*[@$!%*?&])/.test(passwordSpec)); // Output: true
// console.log(/(?=.*[@$!%*?&])/.test(passwordUppercase)); // Output: true

// // Check if password has at least 8 characters
// console.log(/.{8,}/.test(passwordAll)); // Output: true
// console.log(/.{8,}/.test(pswd)); // Output: false

// ----- ----- ----- ----- -----
// // Example: Uppercase requirement
// var regex = /(?=.*[A-Z])/;
// var passwordUpperCase = "PASSWORD";
// var passwordLowerCase = "password";

// // Check if password includes an uppercase letter
// console.log(regex.test(passwordUpperCase)); // Output: true
// console.log(regex.test(passwordLowerCase)); // Output: false