function reverseString(str) {

  var stringArr=[];
  
 
  stringArr=str.split("");
  stringArr=stringArr.reverse(); 
  return stringArr.join(""); 


} 

reverseString("hello");
