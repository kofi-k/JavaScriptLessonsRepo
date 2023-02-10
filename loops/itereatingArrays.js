var numArray = [20, 12, 99, 3, 4]
var sumOfNumArray = 0

for (var i = 0; i < numArray.length; i++){
    sumOfNumArray += numArray[i]
}

console.log(sumOfNumArray ) 

// iterating nested arrays
var nestedArray = [[1,2], [3,4],[5,6]]
var sumOfNestedArray = 0
for (var outer = 0; outer < nestedArray.length; outer++) {
    for(var inner = 0; inner < nestedArray[outer].length; inner++){
        sumOfNestedArray =+ nestedArray[outer][inner]
    }
}

console.log(sumOfNestedArray)