// Title: Century from Year
// Description:
// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
function century(year) {
    let cent = Math.ceil(year / 100);
     if (year % 100 === 0) {
        cent = year / 100;
     }
     return cent;
   }

console.log(century(1905));  // Output: 20
console.log(century(1700));  // Output: 17
console.log(century(2000));  // Output: 20
console.log(century(2023));  // Output: 21
console.log(century(1900));  // Output: 19

