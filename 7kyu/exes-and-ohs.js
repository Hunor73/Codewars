/*
Title: Exes and Ohs
Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let strX = 0
    let strO = 0
    str = str.toLowerCase()
    for(i=0; i<str.length; i++) {
        if(str[i] === "x") {
            strX++
        } else if(str[i] === "o") {
            strO++
        }
    }
    return strO === strX
}

console.log(XO("ooxx")); // Output: true
console.log(XO("xooxx")); // Output: false
console.log(XO("ooxXm")); // Output: true
console.log(XO("zpzpzpp")); // Output: true
console.log(XO("zzoo")); // Output: false

/* Professional solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
*/