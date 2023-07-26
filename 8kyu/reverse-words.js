/*
Title: Reverse words
Description:
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  // Splitting the string into words
  const splitStr = str.split(" ");

  // Reversing each word and joining them back with spaces
  const reverseStr = splitStr.map(word => word.split("").reverse().join(""));

  // Joining the reversed words with the original spaces
  const result = reverseStr.join(" ");

  return result;
}
