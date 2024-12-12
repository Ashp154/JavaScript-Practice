const name = "Ashwini"
const value = 100

// console.log(name + "," + value + " is a good number!");

// console.log(`Hello, My name is ${name} and my repo count is ${value}.`);

const fullName = new String('Ashwini Pawar');

console.log(fullName);

console.log(fullName[0]);

console.log(fullName.__proto__);
console.log(fullName.length);
console.log(fullName.toUpperCase());



console.log(fullName.charAt(9));
console.log(fullName.indexOf("a"));

const anotherString = fullName.substring(0,8)
console.log(anotherString);

const reverseString = fullName.slice(-5,-1)
console.log(reverseString);

const newString = "     Ashwini     "
console.log(newString);
console.log(newString.trim());

const newStringOne = "Ashwini Gorakshnath Pawar"
console.log(newStringOne);

console.log(newStringOne.replace(" Gorakshnath ","-"));

console.log(newStringOne.split(" "));








