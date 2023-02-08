// pushing data into array, ...we pushing it, yahh
var myArr = ['string', 23, true, false, 30.4]
myArr.push([['kofi', 'Dave', 'Bene'], [23, 23, 22]])
console.log(myArr)

// popping the sh...
var poppedItem = myArr.pop() // removes the last element from myArray assigns it to poppedItem

//well, shift is new
myArr.shift() //removes first element in array

//wt?? unshift is a thing?
myArr.unshift(['this', 'is', 'getting', 'pretty', 'wild'])
console.log(myArr)