let score = "33abc"
console.log(typeof score)
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);
//"33" => 33
//"33abc"--> NaN (not a number) but type is number
//true--> 1 ; false-->0


let isLoggedIn=1
let boolIsLoggedIn= Boolean(isLoggedIn)
console.log(boolIsLoggedIn);
console.log(typeof boolIsLoggedIn);

//1 => true; 0=> false
//"" => false
//"Parag" => true

let someNumber = 33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);