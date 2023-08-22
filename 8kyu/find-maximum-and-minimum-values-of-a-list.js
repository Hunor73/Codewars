/*
Title: Find Maximum and Minimum Values of a List
Description:
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes

    You may consider that there will not be any empty arrays/vectors.
*/

/*
My accepted code in Codewars:
var min = function(list){
    
    return Math.min.apply(Math, list)
}

var max = function(list){
    
    return Math.max.apply(Math, list)
}
*/

//Another, perhaps better solution:

function findMin(list) {
    return Math.min(...list)
}

function findMax(list) {
    return Math.max(...list)
}

const numbers = [4, 6, 2, 1, 9, 63, -134, 566];
const minNumber = findMin(numbers);
const maxNumber = findMax(numbers);

console.log(`The minimum is: ${minNumber}, The maximum is: ${maxNumber}`)  