// CRUD perform below

// Array.prototype.push() //uncomment to check vs code defination
// Appends new elements to the end of an array, and returns the new length of the array.

const animalPush = ['pigs', 'goat', 'sheep'];

animalPush.push("cat") //single
animalPush.push("cat", "cow", "dog") //multiple
console.log('animalPush:', animalPush) 

// Array.prototype.unshift()
//Inserts new elements at the start of an array, and returns the new length of the array.

const animalUnshift = ['pigs', 'goat', 'sheep'];

animalUnshift.unshift("cat") //single
animalUnshift.unshift("cat", "cow", "dog") //multiple
console.log('animalUnshift:', animalUnshift) 

const numberUnshift = [1, 2, 3, 4];

numberUnshift.unshift(7, 6);
console.log('numberUnshift:', numberUnshift) //add at the start

// Array.prototype.pop()
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
const animalPop = ['pigs', 'goat', 'sheep'];

animalPop.pop() //
console.log('animalPop:', animalPop) 

// Array.prototype.shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

const animalShift = ['pigs', 'goat', 'sheep'];

animalShift.shift() //
console.log('animalShift:', animalShift) 


// CRUD Challenged
//  Array.prototype.slice()
// .splice(startindex, how much delete, what to update) 
const months = ["march", 'jan', 'feb', 'dec', 'nov'];
// Add and/or removes elements from an array
//  1. Add Dec at the end of and array?
const newMonth = months.splice(months.length, 0, "Dec")
console.log(months)

// 2. What is the return value of splice method?
const deleteJan = months.splice(1, 1)
console.log('deleteJan:', deleteJan) //show deleted element
console.log(months)
// 3. Update march to March (update)?
// // manually
// const updateMarch = months.splice(0, 1, "March")
// console.log('updateMarch:', updateMarch) //show deleted element
// console.log(months)
// dynamic
const monthsN = ["march", 'jan', 'feb', 'dec', 'nov'];
const indexOfMonth = monthsN.indexOf('feb');
//  console.log('indexOfMonth:', indexOfMonth)
if (indexOfMonth != -1) {
    const updateMonth = monthsN.splice(indexOfMonth, 1, "may")
    // console.log('updateMonth:', updateMonth)
    console.log("monthsN:", monthsN)
} else {
    console.log('no data found')
    
}



// 4. Delete June from an array?
// manually
const deleteLast = months.splice(months.length-1, 1)
console.log('deleteLast:', deleteLast)
console.log(months)

// dynamic
const indexOfMonthDelete = monthsN.indexOf('nov');
if (indexOfMonthDelete != -1) {
    const updateMonth = monthsN.splice(indexOfMonthDelete, 1)
    // console.log('updateMonth:', updateMonth)
    console.log("monthsN:", monthsN)
} else {
    console.log('no data found')
    
}

// infinity -delete all data after jan
const indexOfMonthDeleteAll = monthsN.indexOf('jan');
if (indexOfMonthDeleteAll != -1) {
    const updateMonth = monthsN.splice(indexOfMonthDeleteAll, Infinity)
    // console.log('updateMonth:', updateMonth)
    console.log("monthsN:", monthsN)
} else {
    console.log('no data found')
    
}










