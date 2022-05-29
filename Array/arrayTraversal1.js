var myFamily = ['dad', 'mon', 'sis', 'bro']

// for in loop
// return index only
for (let elements in myFamily) {
    console.log('elements:', elements)
    
}

// for of loop
// return element only
for (let elements of myFamily) {
    console.log('elements:', elements)
    
}

// forEach loop
// Array.prototype.forEach()
// Calls a function for each element in the array.


var myFamily = ['dad', 'mom', 'sis', 'bro']
// traditional function
myFamily.forEach(function (element, index, array) {
    console.log('array:', array)
    console.log('index:', index)
    console.log('element:', element)
    
})

// Note: in forEach we can't we break condition once it will run show all the data
// note: support this 

// fat arraow function

// Note: not support this
myFamily.forEach((element, index, array) => {
      console.log('array:', array)
    console.log('index:', index)
    console.log('element:', element)  
})

