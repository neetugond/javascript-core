// Reduce Method

// Array.prototype.reduce()

// flatten an array means to convert the 3d or 2d array into a single dimensional array

// The reduce() method execites a reducer function (that you provide) on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator -store the value its like a container
// Current Value
// Current Index
// Source Array

// when we want single value eg: sum, percentage, average etc


let arr = [2, 3, 4, 6, 8];

let arr1 = arr.reduce((ac, el, i, arr) => {
    
    return ac *= el;
})
console.log('arr1:', arr1)


let arr2 = arr.map((curElem) => {
   
    return curElem*2
}).filter((curElem) => {
    return curElem > 4
}).reduce((accumulator, curElem) => {
    return accumulator +=curElem
})
console.log('arr2:', arr2)

// suppose if we have data previously and want to add to the this array how we can do that

// previous data was string

let arradd = [5,6,2]

let sum = arradd.reduce((accumulator, curElem) => {
    
    return accumulator += curElem;
}, 8)

console.log('sum:', sum)


// how to fatten an array

// converting 2d  and 3d array into one dimensional array

const arrflaten = [
    [1, 2],
    [3, 2],
    [4, 2],
    [5, 2]
]

let flattenArr = arrflaten.reduce((accumulator, curElem) => {
   
    return accumulator.concat(curElem)
})

console.log('flattenArr:', flattenArr)