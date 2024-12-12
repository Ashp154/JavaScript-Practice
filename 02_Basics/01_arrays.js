// Arrays

const myArray = [1,2,3,4,5,6]

console.log(myArray[4]);

// Array Methods

//1
myArray.push(7)
//2
myArray.pop()

console.log(myArray);

//3
myArray.unshift(0); //Adds element at the start of the array - time consuming operation as we need to shift all other elemnets to their next position
console.log(myArray);

//4
myArray.shift(); //removes element at the start of the array - 
console.log(myArray);

//5

console.log(myArray.includes(10)); //includes() check whether the element is present in array or not and returns either TRUE or FALSE
console.log(myArray.indexOf(7));

const newArr = myArray.join("|")
console.log(newArr);

console.log("A ",myArray);

console.log("After Slice Operation: ",myArray.slice(1,4));

console.log("B ",myArray); //after slice operation on an array there will be no chnage in the original array

console.log("After Splice Operation: ",myArray.splice(1,4)); 

console.log("Original Array: ",myArray); //array elements after splice operation

















