//Global scope

let a = 102;
if (true) {
  //block scope
  let a = 10;
  const b = 20;
  //var c = 30;
  console.log("Inner", a);
}
console.log(a); //error
//console.log(b); //error
//console.log(c); //this is will print as we have use var

function one() {
  const username = "parag";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website);

  two();
}

one();

//********Intersting ****** */

function addone(num) {
  return num + 1;
}

addone(5);

//function holding in var if call before declaration it will gice error
const addTwo=function(num){
    return num+2;
}

addTwo(5);