// Array.prototype.map()
// A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

const array1 = [1, 4, 9, 16, 23];


// array1.map((currval, index, array) => {
   
//     console.log('array:', array)
//     console.log('index:', index)
//     console.log('currval:', currval)
    
// })

const newArr = array1.map((curElem, index, array) => {
    // num > 9
    return curElem > 9
})
console.log('array1:', array1)
console.log('newArr:', newArr) //return results true /false


// difference betn forEach and map
// 1. value
// map return new array everytime
// forEach returns undefined
//  2. ability to chain other methods
// map() is chainable this means that we can attach reduce(), sort(), filter() after performing the map() method
// forEach we can't do this becoz its return undefined

// use of map

const useMap = array1.map((curElem, index, array) => {
    
    return `Current element ${curElem} and index is ${index} belongs to this array ${array}`
    
})

// forEach

const useforEach = array1.forEach((curElem, index, array) => {
    
    return `Current element ${curElem} and index is ${index} belongs to this array ${array}`
    
})
console.log('useforEach:', useforEach) 

let arrChain = [2, 3, 4, 6, 8];

let arrChain2 = arrChain.map((curElem) => {
   
    return curElem*2
}).filter((curElem) => {
    return curElem > 8
}).sort((a, b) => b - a).find((curElem) => {
    return curElem> 12
})
console.log('arrChain2:', arrChain2)


