var str = "value of string"

// escaping literal strings in quotes

str = "this is a \"double quotes\" inside a quotation mark"

// better still
str = 'use single quotes for strings so you can "double quote" supa-fast w/o escape characters'

//one more interesting 'back ticks'
str = `'ouuu call this a "hack in a hack". Is this actually called back-tick?  '`

//escaping sequences -- lets get a lil messy
var esp = 'Supa-granny\n\tParent\n\t\tChildren\n\t\t\tBozos\\Sisy\'s'
console.log(esp)


// string concatination

var shortString = "im a short string."
var notSoShortString = "im supposed to be not so short."
var aVeryLongString = shortString + notSoShortString

// something you don't see regularly
aVeryLongString += " together we stand long"
console.log(aVeryLongString)

// length of string
var length = aVeryLongString.length
console.log(length)


//bracket [] notation
var charAtFirst = aVeryLongString[0]
var charAtMid = aVeryLongString[aVeryLongString.length / 2]
var charAtEnd = aVeryLongString[aVeryLongString.length - 1]

console.log("First character: " + charAtIndex + "\nMid Character: " + charAtMid + "\nEnd character: " + charAtEnd)

