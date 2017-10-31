function mutation(arr) {
    var letterFirst = "";
    var letterSecond = "";
    var count = 0;

    for (i = 0; i< arr[1].length; i++){
        count = 0;
        letterFirst = arr[1].slice(i,i+1);

        for (j = 0; j < arr[0].length; j++) {
            letterSecond = arr[0].slice (j, j + 1);

            if (letterSecond.toLowerCase() === letterFirst.toLowerCase()){
                count++;
            }
        }
        if(count === 0){
            return false;
        }
    }
    return true;
}


mutation(["Mary", "Army"]);
