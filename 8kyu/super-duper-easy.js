/*
Title: Super Duper Easy
Desc: 
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

function problem(x){
    if (typeof x ==='string') 
    return "Error"
        else return x*50+6
  }

/*
function problem(x){
    return typeof x == 'string' ? 'Error' : (x * 50 + 6);
  }
*/