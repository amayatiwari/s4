// uppercase.js

// Import the 'readline' module to get input from the console
const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for user input
rl.question('Enter a string: ', (inputString) => {
  // Convert the input string to uppercase
  const uppercasedString = inputString.toUpperCase();

  // Display the result
  console.log('Uppercase:', uppercasedString);

  // Close the readline interface
  rl.close();
});
