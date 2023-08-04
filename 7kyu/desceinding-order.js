/*
Title: Descending Order
Description:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n) {
    //Convertin the number into a string.
    const numStr = n.toString()
    //Splitting the string into an array of characters.
    const numArr = numStr.split('')
    //Sorting the array in descending order.
    numArr.sort((a, b) => b - a)
    //Joining the sorted array back into a string.
    const sortedStr = numArr.join('')
    //Converting the string back to an integer and returning the result.
    const result = parseInt(sortedStr, 10)
  
    return result
  }
  
  console.log(descendingOrder(42145)) // Output: 54421
  console.log(descendingOrder(145263)) // Output: 654321
  console.log(descendingOrder(123456789)) // Output: 987654321

/*
Professional solution
function descendingOrder(n){
  return +(n+'').split('').sort().reverse().join('')
}
*/
  
  