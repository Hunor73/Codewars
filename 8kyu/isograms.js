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

It uses a regular expression to look for any repeated letters in the string and returns true if no repeated letters are found and false if any repeated letters are found. Here's how it works:

    ([a-z]): This part of the regular expression matches any lowercase letter and captures it as a group. This is done using the [a-z] character class.

    .*: This matches any number of characters (including letters) that come after the first matched letter.

    \1: This backreference checks if the same letter as the one captured in the first group (([a-z])) appears later in the string.

    i flag: The /i flag makes the regular expression case-insensitive, as mentioned in your initial problem statement.

The match function returns null if no match is found, so the ! operator is used to invert the result. If a match is found (meaning there are repeated letters), it returns false, indicating that the string is not an isogram. If no match is found (no repeated letters), it returns true, indicating that the string is an isogram.

*/
