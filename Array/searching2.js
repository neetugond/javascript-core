var myFamily = ['dad', 'mom', 'sis', 'bro', 'sis']

console.log("indexOf()")
console.log(myFamily.indexOf("sis")) //1st occurance
console.log(myFamily.indexOf("sis", 3)) //start from 3 index and check if element present or not

// lastIndexOf()
console.log("lastIndexOf()")
console.log(myFamily.lastIndexOf("sis")) //check last index

// includes()
console.log("includes()")
console.log(myFamily.includes("sis")) //sis is available
console.log(myFamily.includes("neetu"))  //not available in array
console.log(myFamily.includes("mom", 3)) //search start from 3rd index

console.log("...........................................")

// filter
console.log("filter")

console.log("find()")
// Array.prototype.find()

//arr.find(callback(element, index, this.array)
// return the found element in the array, if some element in the array satisdies the testing function, or function if not found return undefined.
// only problem is that it return only one element

const prices = [200, 300, 400, 500, 600, 700, 800];
// display price < 400

// function expression

// const findElem = prices.find((currVal) => {
//     return currVal < 400;
// })

// console.log(findElem)

// fat arrow function
console.log(prices.find((currVal) => currVal < 400)) //first element 
console.log(prices.find((currVal) => currVal > 1400)) //not found return undefined

console.log("findIndex()")

// Array.prototype.findIndex()

// Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

console.log(prices.findIndex((currVal) => currVal < 400)) //first value index 0

console.log(prices.findIndex((currVal) => currVal > 1000)) //not found return -1