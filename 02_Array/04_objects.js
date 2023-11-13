//const tinderUser = new Object(); //singleton object

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "paragi";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "parag",
      lastname: "naik",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };

const obj2 = { 11: "av", 22: "bbb" };
const obj4 = { 1111: "av", 2256: "bbb" };

const obj3 = Object.assign({}, obj1, obj2, obj4); //({target},source)
//console.log(obj3);

const obj5 = { ...obj1, ...obj2, ...obj4 };
//console.log(obj5);

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "Js in hindei",
  price: "99",
  courseInstructor: "Parag",
};

//object destructuring
const { courseInstructor: instructor } = course;

console.log(instructor);


