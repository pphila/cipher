let sentenceInput = prompt("Enter a sentence");

console.log(sentenceInput); // i like dogs

const first = sentenceInput.charAt(0).toUpperCase();
const last = sentenceInput.charAt(sentenceInput.length - 1).toUpperCase();

const ends=first+last;

ends.toUpperCase();

//function endUpper() {
  
//  return ends.toUpperCase();
//}

function cap(str){
  let spl = str.split(' ');
  for(let i = 0; i < spl.length; i++){
    let temp = spl[i];
    temp = temp[0].toUpperCase() + temp.slice(1)
    temp = temp.slice(0,-1) + temp[temp.length - 1].toUpperCase();
    spl[i] = temp;
  }
  return spl.join(' ');