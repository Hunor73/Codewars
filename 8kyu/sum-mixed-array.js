/*
Title: Sum Mixed Array
Description:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
function sumMix(x) {
    // Converting the array elements to numbers and then summing them up.
    const sum = x.reduce(function (accumulator, currentValue) {
      // Converting the current value to a number.
      const numericValue = Number(currentValue)
      // Checking if the conversion is successful (not NaN)
      if (!isNaN(numericValue)) {
        // Adding the numeric value to the accumulator.
        accumulator += numericValue
      }
      // Returning the updated accumulator for the next iteration.
      return accumulator
    }, 0) // Initialize the accumulator to 0.
  
    // Returning the final sum
    return sum
  }
  
  // Test the function with an example array
  console.log(sumMix([1, 4, "story", 6]));

/*Concise version:
function sumMix(x){
  return Number(x.reduce((a,b)=>Number(a)+Number(b)))
}
*/