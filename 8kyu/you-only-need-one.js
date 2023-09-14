/*
Title: You only need one - Beginner
Description:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/
function check(a, x) {
    for (let i = 0; i<a.length; i++) {
        if (x === a[i]) {
            return true
        }
    } return false
}
console.log(check([5,3,76,"blue","t",9],6))

/*
A more concise way.
const check = (a,x) => a.includes(x);
*/