var carObj = {
    //proterty : value pair for object
    'brand': "BMW",
    'model': "X6",
    'color': 'Reckless red',
    'year' : "2025",
    'owner' :'Kofi K'
}

// ----------- accessing objects ------------------------
//dot notation for accessing objects
var car = carObj.brand
var owner = carObj.owner

//bracket notation for accessing objects, used when property of 
//object has whitespace
var bmw = carObj['brand']   

// ------ updating objects -----------
carObj.color = 'dangerous dark smoke'

// ------- adding new properties to objects -------
carObj['start'] = 'vroom vroooommm'
