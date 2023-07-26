/*Title:
Battle of the characters
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
Rules:

    Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
    Strings will consist of uppercase letters only
    Only two groups to a fight.
    Group whose total power (A + B + C + ...) is bigger wins.
    If the powers are equal, it's a tie.

Examples:

      * "ONE", "TWO"  -> "TWO"`
      * "ONE", "NEO"  -> "Tie!"
*/
function battle(x, y) {
    //Converting to UPPERCASE
    let xUpper = x.toUpperCase()
    let yUpper= y.toUpperCase()
    let xPower = 0
    let yPower = 0
    //Calculating the power of each character in the first string (x)
    for(let i=0; i < xUpper.length; i++) {
    // Subtracting the ASCII code of 'A' to get the power of the character (A=1, B=2, ..., Z=26)
        xPower += xUpper.charCodeAt(i) - 64;
     }
    console.log("The power of the first string is: ",xPower)
    // Calculating the power of each character in the second string (y)
    for (let i = 0; i < yUpper.length; i++) {
    // Subtracting the ASCII code of 'A' to get the power of the character (A=1, B=2, ..., Z=26)
        yPower += yUpper.charCodeAt(i) - 64;
    }
    console.log("The power of the second string is: ",yPower);
    // Comparing the total power of both groups to determine the winner or tie
    if (xPower > yPower) {
        return xUpper
    } else if (xPower < yPower) {
        return yUpper
    } else {
        return "Tie!"
    }
}
//Test
console.log(battle("army","house")) //house