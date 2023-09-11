/*
Title: Invert values
Description:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/
function invert(array) {
    const invertedArray = []
    for(let i = 0; i < array.length; i++) {
        invertedArray.push(-array[i])
    }
    return invertedArray
}

console.log(invert([1, -2, 3, -4, 5]))
