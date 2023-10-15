const accountId=12345678
let accountEmail="parag@gmail.com"
var accountPassword="12345"
accountCity="Chico"
let accountState;

//cannot change it as it is declared const
// accountId=2;
// console.log(accountId);

accountEmail="hc@gmail.com"
accountPassword="Welcome"
accountCity="Pune"

/*
Prefer not to use var beacuse of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
