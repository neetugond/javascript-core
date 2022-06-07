// higher order function - function which takes another function as an arguments is called hof


// callback function - function which get passed as an argument to another function is called cbf
// a callback function is a function that is passed as an argument to another function, to be "called back" at a later time.

const add = (a, b) => {
    return a+b
}

const subs = (a, b) => {
    return Math.abs(a - b);
}

const multi = (a, b) => {
    return a * b;
}

const calculator = (num1, num2, operator) => {
    return operator(num1, num2)
}
// hof - calculator
// cbf - add, subs, multi
console.log(calculator(5, 2, add))
console.log(calculator(5, 2, subs))
console.log(calculator(5, 2, multi))


// practicing inbuilt hof function
console.log("................")

let arr = [6, 2, 3, 4, 5];

const map =arr.map((ele, i, arr) => {

return ele*2
})
console.log('map:', map)

console.log("................")
console.log("foreach")
const foreach = arr.forEach((ele, i, arr) => {
   
    console.log(ele*3)
})

console.log("................")
const filter = arr.filter((ele, i, arr) => {
   
    return ele%2==0
})
console.log('filter:', filter)

console.log("................")

const reduce = arr.reduce((cv, ac) => {
    
    return cv+ac
})
console.log('reduce:', reduce)





