// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//when waant to compare two thing they should be of same type because they dont give predictable result

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);//null is converted to number i.e 0 and when compared 0>=0 so it is true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//=== strict check will check value as well as its data type