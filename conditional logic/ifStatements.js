function guessNumber (guess) {
    var number = 7
    if (guess == number){ //== converts type before comparison
        return 'Your guess is correct'
    }else {
        return 'Your guess is not correct'
    }
}

console.log(guessNumber(7))
console.log(guessNumber(22))

//strict equality operator === , does not convert value to a type 
function strictComparison (guess) {
    var number = 7
    if (guess === number){ //== converts type before comparison
        return 'Your guess is correct'
    }else {
        return 'Your guess is not correct'
    }
}

console.log(strictComparison('7'))

//other comparison ooperators
function compareNumbers (a, b) {
    if (a > b){ //== converts type before comparison
        return a + ' is greater than ' + b
    }else if (a == b ){
        return 'Both nmbers are equal'
    }else {
        return b + ' is greater than ' + a
    }
}
console.log(compareNumbers(10, 4))

//basically same syntax as java with few specs to it.