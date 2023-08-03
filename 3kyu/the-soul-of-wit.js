/*
Title: The soul of wit: reverse an array
Description:
No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.
You have 30 bytes to spare.

Example: [1, 2, 3] → [3, 2, 1]

And this time you won't be able to do the thing from that kata.
require isn't allowed as well.
*/

//The starting code in Codewars
//const reverse = a => a.reverse();

//Accepted code (due to the 30 bytes restriction)
reverse=a=>[...a].map(a.pop,a)

/*A more verbose code
const reverse = a => {
    for (let i = 0, j = a.length - 1; i < j; i++, j--)
      [a[i], a[j]] = [a[j], a[i]];
}
*/