/*
Title: Square Every Digit
Description:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.
Happy Coding!
*/

function squareDigits(num) {
    // Converting the number to a string to work with individual digits.
    const numStr = num.toString();
    
    // Initializing an empty string to store the squared digits.
    let squaredStr = '';

    // Looping through each digit of the input number.
    for (let i = 0; i < numStr.length; i++) {
        // Squaring the current digit and adding it to the result string.
        const digit = parseInt(numStr[i]);
        const squaredDigit = Math.pow(digit, 2);
        squaredStr += squaredDigit;
    }

    // Parsing the squared string back to an integer and returning it.
    return parseInt(squaredStr);
}

console.log(squareDigits(765)); // Output: 493625

/*
A concise way:

function squareDigits(num){
 return +((num+'').split('').map(value=>value*value).join(''))
  
}

    num + '': This converts the input number num into a string. This is done so that you can easily split it into individual digits.

    split(''): This splits the string into an array of individual characters, effectively separating the digits.

    map(value => value * value): This maps each digit (now represented as a string) to its square by using a mapping function. It converts the character back to a number, squares it, and returns the result as an array of squared values.

    join(''): This joins the array of squared values back into a single string, effectively concatenating them.

    +: Finally, the + operator is used to convert the concatenated string back into a number and return it.

*/