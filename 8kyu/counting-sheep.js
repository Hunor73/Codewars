/*
Title: Counting sheep...
Description:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
function countSheep(arrayOfSheep) {
    let numberOfSheep = 0
    for(let i=0; i<arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            numberOfSheep = numberOfSheep + 1
        }
    }
    return numberOfSheep
  }

console.log(countSheep([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))

/*
Another version
function countSheep(arrayOfSheep) {
  // Use the reduce method to count the true values in the array
  return arrayOfSheep.reduce((count, isSheep) => {
    // Check for undefined or null values and consider them as false
    if (isSheep === true || isSheep === false) {
      return count + (isSheep ? 1 : 0);
    }
    return count;
  }, 0);
}

A much shorter version

function countSheep(arrayOfSheeps) {
  return arrayOfSheep.filter(Boolean).length;
}
*/