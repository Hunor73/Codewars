/*
Title: Get the Middle Character
Description:
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/
function getMiddle(s) {
    //Checking it the string is odd or even length.    
    if(s.length % 2 === 1){
        //Odd
        //Identifying and returning the middle character
        let start = (s.length-1)/2
         return(s.slice(start,start+1))
    } else {
        //Even
        //Identifying and returning  the middle two characters.
        let start = s.length/2 - 1
        return(s.slice(start,start+2))
    }
}

console.log(getMiddle("middle"))

/*
Some more professional solutions

-----

function getMiddle(s)
{
 if (s.length%2===0){return s.slice((s.length/2-1),(s.length/2+1))}
 if (s.length%2!==0){return s.slice((s.length/2),(s.length/2+1))}
}

-----

function getMiddle(s) {
    const mid = Math.floor(s.length / 2)
    return s.length % 2 === 1 ? s[mid] : s.slice(mid - 1, mid + 1)
}

console.log(getMiddle("middle"))
*/