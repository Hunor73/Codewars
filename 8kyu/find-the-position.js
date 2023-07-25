/*Title: Find the Position
Description:
When provided with a letter, return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"*/

function position(letter) {
    // Convert the letter to lowercase to handle both uppercase and lowercase inputs
    letter = letter.toLowerCase()

    // Using a constant array of the alphabet characters to avoid creating it repeatedly
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    //Alternatively: ASCII codes of the alphabet run from 97 to 122
    let alphabet = String.fromCharCode(...Array(123).keys()).slice(97)

    // Use indexOf method to find the position of the letter in the alphabet
    const position = alphabet.indexOf(letter) + 1
    if (position > 0) {
        console.log(`Position of alphabet: ${position}`)
        return `Position of alphabet: ${position}`
    } else {
        console.log('Letter not found in the alphabet.')
        return 'Letter not found in the alphabet.'
    }
}

position("f"); // Output: Position of alphabet: 6


