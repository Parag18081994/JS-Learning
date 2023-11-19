//function defination

// function sayMyName() {
//   console.log("Inside the function");
// }

// sayMyName();

//function arg passing

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumber(10, 2); //if no arg then output is NaN
// addTwoNumber(10, "2"); //102
// addTwoNumber("a", 2);
// const result = addTwoNumber(23, 2);
// console.log("Result-", result);

//Copy
// function addTwoNumber(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

//const result = addTwoNumber(1, 6);
// console.log("Result-", result);
function loginUserMessage(username = "Sammy") {
  if (username === undefined) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Parag Naik"));
console.log(loginUserMessage()); //empty string will give undefined
