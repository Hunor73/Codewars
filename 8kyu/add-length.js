/*
Title: Add Length
Description:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
Note: String will have at least one element; words will always be separated by a space.

*/

function addLength(str) {
    //Turning the string into an array.
    const strArr = str.split(" ")
    // Mapping and joining each word with its length.
    const result = strArr.map(word => `${word} ${word.length}`);
    for(i=0; i<strArr.length; i++) {
    // console.log(strArr[i], charCount[i])
        return result
    }
}

console.log(addLength("apple ban will win"))

/*More professional solution
function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}*/