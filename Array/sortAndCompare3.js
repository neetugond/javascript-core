console.log("for sorting string")
// .sort() direct use for string we can't use with number

const months = ["march", 'jan', 'feb', 'dec', 'nov'];

console.log(months.sort())


console.log("for sorting number")
// .sort((a, b) => (b - a)) asc .array1.sort((a, b) => (a -b)) //desc
const array1 = [1, 30, 4, 21, 500, 350]
// console.log('array1:', array1.sort())
console.log(array1.sort((a, b) => (b - a))) //desc

console.log(array1.sort((a, b) => (a -b))) //asc

