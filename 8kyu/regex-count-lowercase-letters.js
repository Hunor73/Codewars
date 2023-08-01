/*
Title: Regex count lowercase letters
Description: 
Your task is simply to count the total number of lowercase letters in a string.
Examples
"abc" ===> 3
"abcABC123" ===> 3
"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
"" ===> 0;
"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
"abcdefghijklmnopqrstuvwxyz" ===> 26

*/
function lowercaseCount(str) {
    //Match all lowercase letters in the string. /g is for global, will match all occurrences.
    const lowercaseRegex = /[a-z]/g
    //Finding all matches and storing them in the 'matches' variable.
    const matches = str.match(lowercaseRegex)
    //Checking if there are any matches. Output the result or returning zero.
    const num = matches ? matches.length : 0;
    return num
}

//Popular and more professional solution
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}