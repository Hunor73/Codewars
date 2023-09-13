/*
Title: Parse nice int from char problem
Description:
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/
function getAge(inputString) {
    const age = parseInt(inputString, 10) // Converting inputString to an integer.
    if (!isNaN(age)) {
        return age // Returning the age as a number.
    } else {
        return "Invalid input" // Handling invalid input if needed.
    }
}

console.log(getAge("1")) // Output: 4


/*
A more elegant way

function getAge(inputString){
  return parseInt(inputString);
}
*/