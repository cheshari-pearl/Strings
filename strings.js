//Extract the last four characters from the string below; "extravaganza"
let text = "extravaganza";
let output = text.substring(0,8);
console.log({output})


//Insert the following string at the fourth index of the below variable: "eat" const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const addString = food.slice(0,4) + "eat" + food.slice(4);
console.log({addString});



//Count how many times the following string appears in the variable: 1."the" 2."brown" const story= "The quick brown fox jumps over the lazy dog"

const story = "The quick brown fox jumps over the lazy dog";
console.log((story.match(/the/g)).length);
console.log((story.match(/brown/g)).length);

//Using JavaScript, find the following words from the following strings: 1."are" const string1 = "The pupils are reading in the library"; 2."sitting" const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library";
console.log({index: string1.indexOf('are')})

const string2 = "The child was sitting on the table before it fell";
console.log({index: string2.indexOf('sitting')})





//Convert the following strings into specified format: 1. Uppercase: "wonderful" 2.Lowercase: "amazing", "UndERneath" 3.Title case "A wonderful world"

 let sentence = "wonderful";
 let uppercaseSentence = sentence.toUpperCase();
 console.log({uppercaseSentence})

 let words = "amazing, UndERneath";
 let lowercaseWords = words.toLowerCase();
 console.log({lowercaseWords})



 function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  console.log(titleCase('A wonderful world'));



