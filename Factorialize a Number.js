
function factorialize(num) {
    if (num===0){
        return 1;
    } else {
        for (i=num-1;i>0;i--){
            num=num*i;

        }

        return num;
    }
}

factorialize(5);

/*PP's solution:

function factorialize(num) {
    return num <= 0 ? 1 : num * factorialize(num - 1);
}

*/
