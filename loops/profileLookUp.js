var contacts = [
   {
    'firstName':'Vince',
    'lastName':'Kay',
    'number':'03393349834',
    'likes' : ['BMW','Pizza', 'Real Madrid']
   },
   {
      'firstName':'Dave',
      'lastName':'Priest',
      'number':'03340349834',
      'likes' : ['Aston Martini','McDonalds', 'CR7']
     },
     {
      'firstName':'Ben',
      'lastName':'Gee',
      'number':'03393348098',
      'likes' : ['Tesla','Pizza', 'Chelsea']
     },
     {
      'firstName':'Joe',
      'lastName':'Ghost',
      'number':'unknown',
      'likes' : ['BMW','Pizza', 'Real Madrid']
     }
]

function profileLookUp(name, property) {
   for(var i = 0; i < contacts.length; i++) {
      if(contacts[i].firstName === name) {
         return contacts[i][property] || 'No such property "' + property 
   }else {
      return 'No such contacts'
   }
}
}

console.log(profileLookUp('Ben', 'likes'))
console.log(profileLookUp('Sam', 'number'))