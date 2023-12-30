/*
Title: Regex validate PIN code
Desc: 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
    return typeof pin === 'string' &&
        /^\d+$/.test(pin) && // Ensure the string contains only digits
        [4, 6].includes(pin.length); // Only accepts 4 and 6 character pins
}

console.log(validatePIN("1234"));

/*
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
*/
