//rest and spread operator are same according to use case
//rest operator
function calculateCartPrice(...num1) {
  return num1;
}

function calculateCartPrice1(val1, val2, ...num1) {
  console.log(val1, val2);
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 100));
console.log(calculateCartPrice1(200, 400, 500, 100));

const user = {
  username: "Parag",
  price: 3454,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handleObject(user);
handleObject({
  username: "Sam",
  price: 100,
});

const mynewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[0];
}

console.log(returnSecondValue(mynewArray));
