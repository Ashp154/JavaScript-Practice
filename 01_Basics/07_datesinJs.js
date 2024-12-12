// Dates 

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024,12,31);
// let myCreatedDate = new Date(2024,12,31,22,9);

let myCreatedDate = new Date("2024-01-23");

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); //it gives date in miliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // we divide it by 1000 to convert it into milliseconds

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default',{
    weekday: "short"
}))













