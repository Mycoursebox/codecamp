function palindrome(str) {

  str=str.replace(/[^0-9a-z]/gi, '');
    str=str.toLowerCase();
  
    var stringArr=[];
 var backwardString="";
  
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
