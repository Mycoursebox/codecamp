function findLongestWord(str) {
    var length = 0;
    var result = 0;
    var arr = [];
    arr = str.split(" ");

    for (i = 0; i < arr.length; i++){
        length = arr[i].length;

        if (length > result){
            result = length;
        }

    }
    return result;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


/*PP's solution:

function findLongestWord(str) {
    max = 0;
    for (i in str.split(" ")) if (max < i.length) max = i.length;
    return max;
}

*/
