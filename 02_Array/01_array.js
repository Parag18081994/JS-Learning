//array is an object can keep items of different data types like int,string,boolean and are mutable

const myArr=[0,1,2,3,4,5]
const myHero=["shaktiman","Hanuman"]

const myArr2=new Array(1,2,3,4,50)
console.log(myArr);

//Array Method-insert and delete
myArr.push(6)
myArr.pop()
console.log(myArr);

console.log(myArr.includes(3));

const newArr=myArr.join()

console.log(newArr);
console.log(typeof newArr);

//slice ,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myArr);
console.log("B",myn1);

const myn2=myArr.splice(1,3)
console.log("C",myn2);
console.log("Orginal",myArr);






