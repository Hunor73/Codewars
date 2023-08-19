/*
Title: Reversed sequence 
Description:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
  const result = []
  for(let i=n; i>=1; i--) {
    result.push(i)
  }
  return result
}

const n = 5
const reversedArray = reverseSeq(n)
console.log(reversedArray) // Output: [5, 4, 3, 2, 1]

