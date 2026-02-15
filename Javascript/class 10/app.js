// var num = 70.9
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// var num = 23.42783647862347
// console.log(num.toFixed(2))

// var num = Math.random() * 11000
// console.log(num)


var p1 = prompt("Enter player 1 name")
var p2 = prompt("Enter player 2 name")
var toss = Math.floor(Math.random() * 2)

if (toss == 0) {
    console.log(p1 + " heads win")
}
else {
    console.log(p2 + " tails win")
}





