function nextInLine(array, item){
    array.push(item)
    return array.shift()
}
var listOfCars = ['beamer', 'benz', 'lambo','tesla']
console.log("Before: " + JSON.stringify(listOfCars))
console.log(nextInLine(listOfCars,'jeep'))
console.log("After: " + JSON.stringify(listOfCars))