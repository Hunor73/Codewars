/* Title: Capitalization and Mutability
Description:
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.*/

function capitalizeWord(word) {
    //Let's see what string we are having.
      console.log("The word is: ",word)
    //Make sure to work with a string between 1 and 10.
      if (word.length !== 0 && word.length <= 10) {
        //Grab the first letter, capitalize it and attach the rest.  
          word = word[0].toUpperCase()+word.slice(1);
          console.log(word);
          return word;
      } else console.log("Not in range!");
  }
  capitalizeWord("examplewrd")