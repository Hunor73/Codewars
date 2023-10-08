/*
Title: Binary Addition
Desc:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
    const sum = a + b;
    const binarySum = dec2bin (sum);
    return binarySum;
}

function dec2bin(decimal) {
    return (decimal >>> 0).toString(2); // Converting decimal to binary.
}

function addBinary(a,b) {
    const sum = BigInt(a) + BigInt(b); // Useing BigInt to handle large numbers.
    return sum.toString(2); // Converting the sum to binary and returning it as a string.
}

// Test case
console.log(addBinary(
    '100111100101110111110100101110', 
    '1101000010011111000100111100101110111110100101110'
)); // Output: "1101000010011111000100111100101110111110100101110"

console.log(addBinary(1, 1)); // Output: "10"
console.log(addBinary(5, 9)); // Output: "1110"
