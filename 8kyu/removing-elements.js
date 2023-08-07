/*
Title: Removing Elements
Description:

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
    let newArr = []
    for(i=0; i<arr.length; i++) {
        if(i%2 === 0 ) { //Checking if the index is even.
            newArr.push(arr[i]) //Adding the element to the new array.
        }
    }
    return newArr //Returning the new array with every second element removed.
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))

/*A more advanced solution
const removeEveryOther = arr => arr.filter((_, i) => i % 2 === 0);
*/