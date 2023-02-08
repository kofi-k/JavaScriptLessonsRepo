// fuctions with parameters

function dynamicGreet(name) {
    console.log("Howdy! " + name + ".")
}

dynamicGreet("Kofi K")

function addNumbers (a, b) {
    var result = a + b
    console.log("The sum of " + a + "and " + b + " is " + result)
}

addNumbers(10, 90)

// global vs local variables

var global = 'Global' 

function regFunction() {
    var local = 'local'
    var global = global + "precedes in function"
    return global
}

console.log(regFunction())
console.log(global)