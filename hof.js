// given an array of numbers print the square of those numbers

// forEach
console.log("-----------forEach----------")
let arr = [1, 2, 3, 4, 5]

// function inside a function
const square = arr.forEach(function (i, el, array) {
  console.log( i, el*el, array)
})

console.log("----------map----------")

// Given an array of numbers generate an array containing the double value of the numbers

// map

const double = arr.map((el) => {
   
    return el*2
})
console.log('double:', double)

//Given an array of numbers extract the numbers which are odd
console.log("----------filter----------")
const isOdd = function (el) {
    return el%2 ==1
}
const odd = arr.filter(isOdd)
console.log('odd:', odd)

console.log("----------reduce----------")


const prod1 = arr.reduce((ac, el) => {
    return ac*el
})

console.log('prod1:', prod1)

console.log("----or---")

const prod2 = function (ac, cv) {
    return ac*cv
}

var res = arr.reduce(prod2)
console.log('res:', res)





