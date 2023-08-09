/*
Title: Counting Duplicates
Description:
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeat more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text) {
    // Converting to lowercase for case-sensitive comparison.
    text = text.toLowerCase()
    // Creating an array.
    let textArr = text.split("")
    // Creating an object to store the character counts.
    let charCount = {}
    
    for (let i = 0; i < textArr.length; i++) {
        if (charCount.hasOwnProperty(textArr[i])) {
            // Incrementing the number if the character is already in the object.
            charCount[textArr[i]]++
        } else {
            // Initialize the number if the character is not in the object.
            charCount[textArr[i]] = 1
        }
    }
    
    let duplNum = 0
    
    // Countint the characters with counts greater than 1.
    for (const char in charCount) {
        if (charCount[char] > 1) {
            duplNum++
        }
    }
    
    return duplNum
}

console.log(duplicateCount("aabBcde")) // Output: 2

/*
A more professional version.

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

1. `text.toLowerCase()`: This converts the input text to lowercase, ensuring that the function is case-insensitive as required.

2. `.split('')`: This splits the lowercase text into an array of characters. Each character becomes an element in the array.

3. `.sort()`: The array of characters is sorted in lexicographical order. This is important because it groups identical characters together, making it easier to identify duplicates.

4. `.join('')`: The sorted array of characters is joined back into a single string. This concatenated string is ready for the next step.

5. `.match(/([^])\1+/g)`: This part of the code is a regular expression that uses backreferences to match consecutive duplicate characters. Here's what it does:
   - `([^])` captures any character and creates a capturing group. The `^` inside the square brackets negates the character class, so `[^]` matches any character.
   - `\1+` matches the captured character one or more times. `\1` refers to the first capturing group (which is any character), and `+` indicates one or more occurrences.

6. `|| []`: The `match` function returns an array of matched substrings (duplicates) or `null` if no matches are found. In case no duplicates are found, this part of the code returns an empty array `[]` to avoid a potential `null` value.

7. `.length`: Finally, the length of the array returned by the `match` function is taken, which gives the count of distinct duplicates.

Overall, this approach works by transforming the input text into a sorted string and then using a regular expression to match and count consecutive duplicate characters. It's a clever use of JavaScript's string and regular expression capabilities to achieve the desired result in a concise manner. However, due to its condensed nature, it might be less intuitive for someone not familiar with these techniques.
*/