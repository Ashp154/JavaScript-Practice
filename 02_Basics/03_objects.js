// Singleton - when object is created using constructorObject
// Object.create

// Object Literals 

//Symbol data type declaration

const mySymbol = Symbol("key1")

// console.log(mySymbol);


const jsUser = {
    name: "Ashwini",
    "full name": "Ashwini Pawar",
    department: "IT",
    location: "Pune",
    email: "ashwini.pawar1@nitorinfotech.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    [mySymbol]: "Symbol1"           // to use mySymbol as a symbol we need to keep it in [] like mentioned 
}
jsUser.email = "ashwini@gmail.com" // changes the value of email property of jsUser object

// Object.freeze(jsUser) // it locks the object jsUser i.e we can not change its properties

jsUser.isLoggedIn = true    //If we try to chnage the property but it wont give any error but it will not get propogate

// console.log(jsUser.isLoggedIn);


// console.log(jsUser.email);
// console.log(jsUser[email]);      //Gives an error

// console.log(jsUser["email"]);  //as keys i.e email/name are stored as a string at background, Therefore we need to mention it in the ""

// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

// console.log(typeof jsUser[mySymbol]);


// Adding functions in JS

jsUser.greeting = function(){
    console.log("Hello jsUser");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${jsUser["full name"]}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());







