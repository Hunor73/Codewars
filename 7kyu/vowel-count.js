/*
Title: Vowel count
Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    let count = 0    
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    
    return count
}

console.log(getCount("Blue Marine"));

/*
More concise

function getCount(str) { 
   return (str.match(/[aeiou]/ig)||[]).length;
}
*/