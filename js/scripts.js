let sentenceInput = prompt("Enter a sentence");

console.log(sentenceInput); // i like dogs

const first = sentenceInput.charAt(0);
const last = sentenceInput.charAt(sentenceInput.length - 1);
  
//function sentenceInput(first, last).toUppercase() {
  //return first + last;
//}

const ends=first+last;

function endUpper(ends) {
  return ends.toUpperCase();
}
