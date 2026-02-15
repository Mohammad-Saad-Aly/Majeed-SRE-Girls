// var printDate = new Date().getTime() 
// document.writeln(printDate)

// var printday = new Date().toString()
// document.writeln(printday.slice(4, 15))


// var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"]
// var printDate = new Date().getDay()
// document.writeln(days[printDate])


var dob = new Date('14 aug, 1947').getTime()
var todaydate = new Date().getTime()

var minus = todaydate - dob

var formula = Math.floor(minus / (1000 * 60 * 60 * 24 * 365))

document.writeln(formula)





