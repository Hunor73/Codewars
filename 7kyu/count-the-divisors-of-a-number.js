/* Title: Count the divisors of a number
Description:
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

/* This works but timed out with big numbers.
function getDivisorsCnt(n){
    let numofdivisors = 0
    for (let i=1; i<=n; i++) {
        if (n%i === 0) {
            numofdivisors = numofdivisors + 1
        }
    }
    return numofdivisors
}
console.log(getDivisorsCnt(12))

*/

//Works for big numbers.
function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // If i is a divisor, check if n/i is also a divisor (unless it's the same)
            if (n / i === i) {
                count++;
            } else {
                count += 2; // Both i and n/i are divisors
            }
        }
    }
    return count;
}

console.log(getDivisorsCnt(50000)); // Output: 6
