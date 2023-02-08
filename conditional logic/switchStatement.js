function numberToGreek(value) {
    var answer = ""
    switch(value){
        case 1: 
            answer = 'alpha'
            break
        case 2: 
            answer = 'beta'
            break
        case 3: 
            answer = 'gamma'
            break
        case 4: 
            answer = 'delta'
            break
        
        case 5:
        case 6:
        case 7:
            answer = 'google it mate'
            break
        default:
            answer = 'undefined'
            break
    }
    return answer
}

console.log(numberToGreek(3))