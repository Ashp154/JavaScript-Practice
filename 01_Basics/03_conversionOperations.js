//let score = "33"             // converted to => 33
//let score = "33abc"          // could not get converted => NaN
//let score = null              //converted to => 0 
//let score = undefined        //could not get converted => NaN
//let score = true             //converted to => 1
let score = false               //converted to => 0


// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// let isLoggedIn = 1       //true
// let isLoggedIn = ""      //false
// let isLoggedIn = "Ashwini"  //true
let isLoggedIn = -98            //true
let booleanIsLogged = Boolean(isLoggedIn)
// console.log(booleanIsLogged);

let isString = 33
let isStringConverted = String(33)
console.log(isStringConverted);
console.log(typeof isStringConverted);








