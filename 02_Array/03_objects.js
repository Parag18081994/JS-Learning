//singleton-using constructor and object of one kind
//Object.create

//object Literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh", //key are string always
  age: 18,
  "full name": "Parag Bharat Naik",
  [mySym]: "mykey1",
  location: "Pune",
  email: "parag@mphasis.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Thursday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
//console.log(JsUser.mySym); this is wrong when we put symbol in object

console.log(JsUser[mySym]);
JsUser.email = "parag@google.com"; //override value in object
//Object.freeze(JsUser); //cannot change the value of the object

JsUser.greeting = function () {
  console.log("Hello Parag loser");
};

JsUser.greetingTwo = function () {
  console.log(`Hello 2 JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
