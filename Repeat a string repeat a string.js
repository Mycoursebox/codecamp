
function repeatStringNumTimes(str, num) {
    // repeat after me
    var newString = "";
    if (num <= 0){
        return "";
    }

    for (i = 0; i < num; i++){
        newString = newString + str;

    }

    return newString;
}

repeatStringNumTimes("abc", 3);



/*PP's solution:
function repeatStringNumTimes(str, num) {
    return num < 0 ? "" : str.repeat(num);
}
*/
