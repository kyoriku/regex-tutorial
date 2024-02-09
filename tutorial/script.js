

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


// ----- ^ -----
// var regex = /^hello/; // Regex to match strings starting with "hello"
// var stringHello = "hello world"; // String starting with "hello"
// var stringWorld = "world hello"; // String not starting with "hello"

// // Check if each string starts with "hello"
// console.log(regex.test(stringHello)); // Output: true
// console.log(regex.test(stringWorld)); // Output: false


// ----- $ -----
// var regex = /world$/; // Regex to match strings ending with "world"
// var stringHello = "hello world"; // String ending with "world"
// var stringWorld = "world hello"; // String not ending with "world"

// // Check if each string ends with "world"
// console.log(regex.test(stringHello)); // Output: true
// console.log(regex.test(stringWorld)); // Output: false


// // ----- (?=.*[A-Z]) -----
// var regex = /(?=.*[A-Z])/; // Uppercase requirement
// var passwordMixedCase = "Password"; // Mixed case password
// var passwordLowerCase = "password"; // Lowercase password

// // Check if password includes an uppercase letter
// console.log(regex.test(passwordMixedCase)); // Output: true
// console.log(regex.test(passwordLowerCase)); // Output: false


// // ----- (?=.*[a-z]) -----
// var regex = /(?=.*[a-z])/; // Lowercase requirement
// var passwordMixedCase = "Password"; // Mixed case password
// var passwordUpperCase = "PASSWORD"; // Uppercase password

// // Check if password includes a lowercase letter
// console.log(regex.test(passwordMixedCase)); // Output: true
// console.log(regex.test(passwordUpperCase)); // Output: false


// // ----- (?=.*\d) -----
// var regex = /(?=.*\d)/; // Digit requirement
// var passwordDigit = "Password123" // Password containing digits
// var passwordMixedCase = "Password"; // Mixed case password

// // Check if password includes a digt
// console.log(regex.test(passwordDigit)); // Output: true
// console.log(regex.test(passwordMixedCase)); // Output: false


// // ----- (?=.*[@$!%*?&]) -----
// var regex = /(?=.*[@$!%*?&])/ // Special characters requirement
// var passwordSpecChar = 'password@$!'; // Password containing special characters
// var passwordMixedCase = "Password"; // Mixed case password

// // Check if password includes a special character
// console.log(regex.test(passwordSpecChar)); // Output: true
// console.log(regex.test(passwordMixedCase)); // Output: false