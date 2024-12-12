const marvel_heroes = ['Thor','Ironman','Spiderman']
const dc_heroes = ['Superman','Flash', 'Batman']

// Using Push()
//  marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// console.log(marvel_heroes.concat(dc_heroes));


//Using Concat()
const marvel_dc_heroes = marvel_heroes.concat(dc_heroes);
// console.log("Marvel Heroes: ",marvel_heroes);
// console.log("Dc Heroes: ",dc_heroes);


// console.log("Marvel + Dc Heroes: ",marvel_dc_heroes);

// Using spread operator

const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes);

// Using flat() 

const another_Array = [1,2,3,[4,5,6],7,8,[9,[0,10]]]

const flat_Array = another_Array.flat(2) // 2 represent depth i.e upto which depth you want to resolve it. it could be infinity also

// console.log(flat_Array);

//using Array Object and its static methods

console.log(Array.isArray("Ashwini")); //isArray() checks whether the given object is anarray or not 
console.log(Array.from("Ashwini")); // from() creates an array from an iterable object
console.log(Array.from({name: "Ashwini"})); // Interesting

let score1 = 100;
let score2 = 200;
let score3 = [300,400];

console.log(Array.of(score1,score2,score3)); //of() returns a new array from a set of elements












 
