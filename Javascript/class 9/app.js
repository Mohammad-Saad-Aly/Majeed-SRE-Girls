// var str = "Hello WORLD"
// var change = str.toLowerCase()
// console.log(change)

// var user = prompt("Enter any word")
// var firstChar = user.slice(0, 1).toUpperCase()


// var str = "hElLo"
// var abc = str.slice(0, 1).toUpperCase()
// var baqi = str.slice(1).toLowerCase()
// var concat = abc + baqi
// console.log(concat)

var cars = ["Mehran", "Khyber", "Ferrari", "Bmw", "Mercedes"]
var user = prompt("Enter your desired car")
var firstChar = user.slice(0,1).toUpperCase()
var baqi  = user.slice(1).toLowerCase()
var concat = firstChar + baqi
var match = false


for (var i = 0; i < cars.length; i++) {
    if (concat == cars[i]) {
        match = true
        document.writeln(`${concat} car available`)
        break
    }
}

if (match == false) {
    document.writeln(`${concat} car not available`)
}


// for(var i=0; i <= 10; i++){
//     if(i == 5){
//         continue
//     }
//     document.writeln(i + "<br>")
// }




















// hELlo woRld
//  HELLO WORLD 
