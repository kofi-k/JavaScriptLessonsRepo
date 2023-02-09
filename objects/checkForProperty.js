var myObj = {
    'name' : 'kofi',
    'height' : 6.3,
    'title' : 'android developer'
}

function checkProperty (property) {
    if (myObj.hasOwnProperty(property)){
        return myObj[property]
    } else {
        return 'property doe not exist'
    }
}

console.log(checkProperty('age'))