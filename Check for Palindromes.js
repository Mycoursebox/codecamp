function palindrome(str) {

    str = str.replace(/[^0-9a-z]/gi, '');
    str = str.toLowerCase();

    var stringArr = [];
    var backwardString ="";

    stringArr=str.split("");
    stringArr=stringArr.reverse();
    backwardString=stringArr.join("");

    if (backwardString===str){
        return true;
    } else {
        return false;
    }

}

palindrome("eye");


/*PP's solution:

function palindrome(s) {
return s == "" || (s.charAt(0) === s.charAt(s.length - 1) && palindrome(s.substring(1, s.length - 2)))
}

Note: it doesn't ignore special characters

*/
