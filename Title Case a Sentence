function titleCase(str) {
  var arr=[];
  var word="";
  var firstLetter="";
  var newSentence="";
  
  str=str.toLowerCase();
  arr=str.split(" ");
  
  for (i=0;i<arr.length;i++){
    word=arr[i];
    firstLetter=word.charAt(0).toUpperCase();
    word=firstLetter+ word.substring(1);
    arr[i]=word; 
  }
  
  newSentence=arr.join(" ");
  return newSentence;
}

titleCase("I'm a little tea pot");
