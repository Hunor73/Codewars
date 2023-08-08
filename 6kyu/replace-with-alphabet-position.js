/*
Title: Replace With Alphabet Position
Description:

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sun sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/
function alphabetPosition(text) {
    let result = ""
    for (let i = 0; i < text.length; i++) {
        // Converting to uppercase.
        let char = text[i].toUpperCase()
        // Checking if the character is a letter.            
        if (char >= 'A' && char <= 'Z') {
            // Converting the character code to alphabet position.
            let position = char.charCodeAt(0) - 64 
            // Adding the position to the result string
            result += position + " "
        }
    }
    // Trimmin any trailing space and returning the result
    return result.trim()
}

console.log(alphabetPosition("The sun sets at twelve o' clock."));

/*
A more professional solution

function alphabetPosition(text) {
  return text.split('').filter(v=>/[a-zA-Z]/.test(v)).map(v=>v.toLowerCase().charCodeAt(0)-96).join(' ');
}

*/