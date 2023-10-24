const name="Parag"
const repoCount=50

//concatinate - a string and number
console.log(name+repoCount);

//mostly used i.e string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//string is object
const gameName=new String('paragna')
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString=gameName.substring(2,6);
console.log(newString);

//trim
const newStringOne="   Parag   "

console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/parag%20naik"
console.log(url.replace('%20','-'));

console.log(gameName.split('a'));