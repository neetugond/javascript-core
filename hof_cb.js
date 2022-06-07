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
// hof - calculator
// cbf - add, subs, multi
const calculator = (num1, num2, operator) => {
    return operator(num1, num2)
}

console.log(calculator(5, 2, add))
console.log(calculator(5, 2, subs))
console.log(calculator(5,2, multi))