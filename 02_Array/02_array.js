const marvel_heroes=["thor","iron man","spider man"]
const dc=["superman","batman","flash"]

//marvel_heroes.push(dc);
//console.log(marvel_heroes);

const marvelTakeOver=marvel_heroes.concat(dc)
console.log(marvelTakeOver);

//spread operator
const all_new_heros=[...marvel_heroes,...dc]
console.log(all_new_heros);

console.log(Array.isArray("Parag"));
console.log(Array.from("Parag"))
console.log(Array.from({name:"Parag"})) //interesting