/*
Title: Correct the mistakes of the character recognition software
Description:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter) are digitised, character recognition softwares often make mistakes.

Your task is to correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

*/
function correct(string) {
    let correctedString = ''
  
    for (let i = 0; i < string.length; i++) {
      const currentChar = string.charAt(i)

      if (currentChar === '0') {
        correctedString += 'O'
      } else if (currentChar === '1') {
        correctedString += 'I'
      } else if (currentChar === '5') {
        correctedString += 'S'
      } else {
        correctedString += currentChar
      }
    }
  
    return correctedString
  }

console.log(correct("Example 0 1 5"))
  
/* Advanced solution
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
*/