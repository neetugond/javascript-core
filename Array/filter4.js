// Array.prototype.filter()

// Return a new array containing all elements of the calling

// array for which the provided filtering function returns true.

const prices = [200, 300, 400, 500, 600, 700, 800];

// const newPriceTag = prices.filter((elem, index) => {
//     return elem < 400;
// })
// console.log(newPriceTag) //return all the element in a new array > 400

// if not found

const newPriceTag = prices.filter((elem, index) => {
    return elem > 1400;
})
console.log( newPriceTag) //return empty array if not found