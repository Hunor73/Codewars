/*
Title: Ordinal numbers
Description:

Introduction
Ordinal numbers are used to tell the position of something in a list. Unlike regular numbers, they have a special suffix added to the end of them.

Task
Your task is to write the ordinal(number, brief) function. The number will be an integer. You need to find the ordinal suffix of said number.
brief is an optional parameter and defaults to false. When using brief notation, nd and rd, use d instead. All others are the same.
ordinal(number, brief) should return a string, containing those two characters (or one character) that would be tagged onto the end of the number.
The last two digits determine the ordinal suffix.

Notation for general notation
0  1  2  3  4  5  6  7  8  9
th st nd rd th th th th th th

Notation for brief notation
0  1  2  3  4  5  6  7  8  9
th st d  d th th th th th th

However, when the last two digits of the number are 11, 12, or 13, th is used instead of st,nd,rd respectively.

Examples

*General
1 - 1st
2 - 2nd
3 - 3rd
5 - 5th
11- 11th
149 - 149th
903 - 903rd

*Brief
1 - 1st
2 - 2d
3 - 3d
5 - 5th
11- 11th
149 - 149th
903 - 903d

Notes

    Numbers might be passed in replacement of booleans, so false may be passed in as 0 and true may be passed in as 1.
*/

function ordinal(number, brief) {
    // Getting the last two digits of the number.
    const lastTwoDigits = number % 100
    // Checking if they are 11, 12, or 13. If so, return the "th" suffix.
    if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
      return "th"
    }
    // If not ending in 11, 12, or 13, determine the suffix based on the last digit.
    const lastDigit = number % 10
    if (brief) {
      // Use brief suffixes.
      if (lastDigit === 1) {
        return "st"
      } else if (lastDigit === 2) {
        return "d"
      } else if (lastDigit === 3) {
        return "d"
      }
    } else {
      // Use general suffixes.
      if (lastDigit === 1) {
        return "st"
      } else if (lastDigit === 2) {
        return "nd"
      } else if (lastDigit === 3) {
        return "rd"
      }
    }
    // If it is not a special case, use the "th" suffix.
    return "th"
  }

/* Professional solution
function ordinal(number, brief) {
  var n = ['th','st','nd','rd'],
      m = number % 100,
      k = ( n[( m - 20 ) % 10] || n[m] || n[0] );
  return (brief && k[1] == 'd') ? 'd' : k;
}
*/