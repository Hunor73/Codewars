/*
Title: Isograms
Description: 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/
function isIsogram(str) {
    // Converting the input string to lowercase.
    str = str.toLowerCase();

    // Creating an empty object to store characters that we have seen.
    const seenCharacters = {};

    // Iterating through the string.
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If the character is already in the seenCharacters object, it's not an isogram.
        if (seenCharacters[char]) {
            return false;
        }

        // Otherwise, mark it as seen.
        seenCharacters[char] = true;
    }

    // If we've checked all characters and didn't find any duplicates, it's an isogram.
    return true;
}

// Test cases
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("moose")); // false
console.log(isIsogram("aba")); // false

/*
A concise solution

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

*/
