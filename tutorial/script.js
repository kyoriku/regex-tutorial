// var passwordAll = "PassWord123@$!";
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


// // ----- Uppercase -----
// var regex = /(?=.*[A-Z])/; // Uppercase requirement
// var passwordMixedCase = "Password"; // Mixed case password
// var passwordLowerCase = "password"; // Lowercase password

// // Check if password includes an uppercase letter
// console.log(regex.test(passwordMixedCase)); // Output: true
// console.log(regex.test(passwordLowerCase)); // Output: false


// // ----- Lowercase -----
// var regex = /(?=.*[a-z])/; // Lowercase requirement
// var passwordMixedCase = "Password"; // Mixed case password
// var passwordUpperCase = "PASSWORD"; // Uppercase password

// // Check if password includes a lowercase letter
// console.log(regex.test(passwordMixedCase)); // Output: true
// console.log(regex.test(passwordUpperCase)); // Output: false


// // ----- Digit -----
// var regex = /(?=.*\d)/; // Digit requirement
// var passwordDigit = "Password123" // Password containing digits
// var passwordMixedCase = "Password"; // Mixed case password

// // Check if password includes a digt
// console.log(regex.test(passwordDigit)); // Output: true
// console.log(regex.test(passwordMixedCase)); // Output: false


// // ----- Special Character -----
// var regex = /(?=.*[@$!%*?&])/ // Special characters requirement
// var passwordSpecChar = 'password@$!'; // Password containing special characters
// var passwordMixedCase = "Password"; // Mixed case password

// // Check if password includes a special character
// console.log(regex.test(passwordSpecChar)); // Output: true
// console.log(regex.test(passwordMixedCase)); // Output: false