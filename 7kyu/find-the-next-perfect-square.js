/*
Title: Find the next perfect square!
Description:
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square


*/
//Using another Codewars kata.
var isSquare = function(n) {
    return n >= 0 && Math.sqrt(n) % 1 === 0
  }
  
// If the input is not a perfect square, return -1.
  function findNextSquare(sq) {
    if (!isSquare(sq)) {
      return -1
    }
    
// Find the next perfect square by adding 1 to the current square and checking if it's a perfect square.
    let nextSquare = sq + 1;
    while (!isSquare(nextSquare)) {
      nextSquare++;
    }
    
    return nextSquare;
  }
  
  console.log(findNextSquare(121)); // Should print 144
  console.log(findNextSquare(625)); // Should print 676
  console.log(findNextSquare(114)); // Should print -1
  