const score=400;
const balance=new Number(100) //object of type of number so that you can use predefined proto type methods
console.log(typeof balance);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(7));

const otherNumner=23.9445
console.log(otherNumner.toPrecision(2));
const hundred=100000
console.log(hundred.toLocaleString('en-IN'));


// ++++++++++++++++ Math ++++++++++++++++++++

console.log(Math.abs(-4)); //number sign reversal
console.log(Math.round(4.6));
console.log(Math.ceil(8.9));
console.log(Math.floor(8.9));

console.log((Math.random()*10)+1);