/*
Title: Sort and Star
Desc: 
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/
function twoSort(s) {
    // Sorting the array alphabetically.
    s.sort();
  
    // Getting the first string from the sorted array.
    const firstString = s[0];
  
    // Splitting the first string into an array of characters and join them with "***" in between.
    const result = firstString.split('').join('***');
  
    return result;
  }

const strings = ["banana", "apple", "cherry", "date"];
const sortedString = twoSort(strings);
console.log(sortedString); // Output: "a***p***p***l***e"

console.log(twoSort(["banana", "apple", "cherry", "date"]));

/*
More concise:

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
*/
    