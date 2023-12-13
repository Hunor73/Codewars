/* Title: Remove anchor from URL
Desc: 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    for (let i = 0; i<url.length; i++) {
        if (url[i] === '#' ) {
            //New string without the anchor.
            return url.slice(0, i);
        }
    }
    //If no anchor is found. return the original URL.
    return url;
  }

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com?page=1"));

/*
function removeUrlAnchor(url){
  return url.split('#')[0];
}
*/