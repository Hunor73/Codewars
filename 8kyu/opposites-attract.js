/*
Title: Opposites Attract
Description:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals, it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/
/*
Title: Opposites Attract
Description:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals, it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love; otherwise, return false.

*/

function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0) && (flower2 % 2 === 1)) {
      return true // They are in love!
    } else if ((flower1 % 2 === 1) && (flower2 % 2 === 0)) {
      return true // They are in love!
    } else {
      return false // They aren't in love.
    }
  }
  
  console.log(lovefunc(4, 7)) // Output: true (They are in love!)
  

  /*
  A better version.

  function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
*/