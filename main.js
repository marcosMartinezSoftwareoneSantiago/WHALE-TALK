let input ='cualquier texto sirve';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];
for (let i = 0; i < input.length; i++){
  //console.log(i);
  for (let j = 0; j < vowels.length; j++){
    //console.log(j);
    if(input[i] == vowels[j]){
      resultArray.push(input[i]);
      if(input[i] === "e" || input[i] === "u" ){
        resultArray.push(input[i]);
      }
    }
  }
}
//console.log(resultArray);
var resultString =  resultArray.join('').toUpperCase();
console.log(resultString);