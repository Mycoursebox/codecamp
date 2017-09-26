
function destroyer(arr) {

	var newArray = Array.prototype.slice.call(arguments);
  
   for (i=0;i<newArray.length;i++){
         for (j=0;j<arr.length;j++){
    if (newArray[i]===arr[j]){
        delete arr[j];
        }
         }
  }
return arr.filter(Boolean);
}

destroyer([3, 5, 1, 2, 2], 2, 3,5);
