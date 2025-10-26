/* Task

Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".

Input/Output
    [input] string str

A string consists of lowercase latin letters, digits and symbols.
    [output] a string
*/

// Attempt 1

/*
function reverseLetter(str) {
  const alphabeticChars = [];
  
  // 1. Filter: Iterate and  collect only alphabetic characters.
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // Check if lowercase letter (a to z).    
    if (char >= 'a' && char <= 'z') {
      alphabeticChars.push(char);
    }
  }
  
  // 2. Reverse the array and join the elements back into a string.
  return alphabeticChars.reverse().join('');
}

// Example
console.log(reverseLetter("krishan"));  // Output: "nahsirk"
console.log(reverseLetter("ultr53o?n")); // Output: "nortlu"
console.log(reverseLetter("a-b-c-d-e")); // Output: "edcba"
console.log(reverseLetter("123hello456world!")); // Output: "dlrowolleh"
  
*/

// Attempt 2

function reverseLetter(str) {
  // Convert to an array.
  return str.split('')
    // Filter out non-alphabetic characters.
    .filter(char => char >= 'a' && char <= 'z')
    // Reverse the order of the remaining characters.
    .reverse()
    // Join the array back into a string.
    .join('');
}

// Example
console.log(reverseLetter("krishan"));  // Output: "nahsirk"