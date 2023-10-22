function stringWithOnlyAlphaNumeric(str) {
  // Replace takes a regex and a replacement string
  return str.replace(/[^a-z0-9]/gi, "");
}

function stringLowercased(str) {
 return str.toLowerCase();   // ES6 lesson
}

const stringReversed = (str) => {
  let result="";
  for (let i=str.length-1; i>=0; i--) {
   result += str[i];
  }
  return result;
}

function palindrome(str) {
  
const cleanedUpStr=stringWithOnlyAlphaNumeric(str);

const lowercaseStr=stringLowercased(cleanedUpStr);

const reversedStr=stringReversed(lowercaseStr);

//console.log(`Is "${lowercaseStr}" equal to "${reversedStr}"?`);

return lowercaseStr == reversedStr;
}

console.log(palindrome("five|\_/|four"));




