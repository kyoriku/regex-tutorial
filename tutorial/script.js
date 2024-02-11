// ---------- Anchors ----------
// ^
var regex = /^hello/; // Regex to match strings starting with "hello"
var stringHello = "hello world"; // String starting with "hello"
var stringWorld = "world hello"; // String not starting with "hello"

// Check if each string starts with "hello"
console.log(regex.test(stringHello)); // Output: true
console.log(regex.test(stringWorld)); // Output: false

// $
var regex = /world$/; // Regex to match strings ending with "world"
var stringHello = "hello world"; // String ending with "world"
var stringWorld = "world hello"; // String not ending with "world"

// Check if each string ends with "world"
console.log(regex.test(stringHello)); // Output: true
console.log(regex.test(stringWorld)); // Output: false


// ---------- Positive Lookaheads ----------
// (?=.*[A-Z])
var regex = /(?=.*[A-Z])/; // Uppercase requirement
var passwordMixedCase = "Password"; // Mixed case password
var passwordLowerCase = "password"; // Lowercase password

// Check if password includes an uppercase letter
console.log(regex.test(passwordMixedCase)); // Output: true
console.log(regex.test(passwordLowerCase)); // Output: false

// (?=.*[a-z])
var regex = /(?=.*[a-z])/; // Lowercase requirement
var passwordMixedCase = "Password"; // Mixed case password
var passwordUpperCase = "PASSWORD"; // Uppercase password

// Check if password includes a lowercase letter
console.log(regex.test(passwordMixedCase)); // Output: true
console.log(regex.test(passwordUpperCase)); // Output: false

// (?=.*\d)
var regex = /(?=.*\d)/; // Digit requirement
var passwordDigit = "Password123" // Password containing digits
var passwordMixedCase = "Password"; // Mixed case password

// Check if password includes a digt
console.log(regex.test(passwordDigit)); // Output: true
console.log(regex.test(passwordMixedCase)); // Output: false

// (?=.*[@$!%*?&])
var regex = /(?=.*[@$!%*?&])/ // Special character requirement
var passwordSpecChar = 'password@$!'; // Password containing special characters
var passwordMixedCase = "Password"; // Mixed case password

// Check if password includes a special character
console.log(regex.test(passwordSpecChar)); // Output: true
console.log(regex.test(passwordMixedCase)); // Output: false


// ---------- Character Classes ----------
// [A-Za-z\d@$!%*?&]
var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var passwordAll = "PassWord123@$!"; // Password with all criteria met
var passwordLowerCase = "password"; // Lowercase password

// Check if each password meets the criteria
console.log(regex.test(passwordAll)); // Output: true
console.log(regex.test(passwordLowerCase)); // Output: false


// ---------- Quantifiers ----------
// {8,}
var regex = /.{8,}/; // Character length requirement
var passwordLong = "Password"; // Password with at least 8 characters
var passwordShort = "pswd"; // Password with less than 8 characters

// Check if password has at least 8 characters
console.log(regex.test(passwordLong)); // Output: true
console.log(regex.test(passwordShort)); // Output: false