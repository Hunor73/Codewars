/*
Title: How good are you really?
Description:
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/
function betterThanAverage(classPoints, yourPoints) {
    let avg = 0
    let sum = 0
    for(let i=0; i<classPoints.length; i++) {
        sum += classPoints[i]
    }
    avg = (sum + yourPoints)/ (classPoints.length + 1)
    return yourPoints > avg
  }

console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))

/*
A more concise version:

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
*/

