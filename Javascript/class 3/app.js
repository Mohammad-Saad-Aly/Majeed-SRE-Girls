// var a = 2
// var b = 3
// var eq = ++a + b++ - ++b + --b - a-- + --a + a++ + b++
// document.writeln(eq)

// var a = 5
// var b = 5
// var c = 5
// var eq = c-- + b++ - --a + ++b + c-- + b + ++c + a-- + b++ - ++b + c + b++ + ++a          
// document.writeln(eq)

// var user = prompt("Enter your name", "Hafsa")
// var age = prompt("Enter your age")
// var email = prompt("Enter your email")

// document.writeln(
//     "Your name is "+ user +
//     "<br> Your age is "+ age +
//     "<br> Your email is "+ email
// )


// var user = "Ali"
// var admin = "rehman"

// document.writeln(
//     `Your first name is ${user}
//     <br>
//     Your last name is ${admin}
//     `
// )


document.writeln(`------ Calculator ------- <br>`)


var num1 = +prompt("Enter value 1")
var num2 = +prompt("Enter value 2")
var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2
var mod = num1 % num2


document.writeln(
    `
    The sum of ${num1} and ${num2} is = ${add} 
    <br>
    The sub of ${num1} and ${num2} is = ${sub}
    <br>
    The mul of ${num1} and ${num2} is = ${mul}
    <br>
    The div of ${num1} and ${num2} is = ${div.toFixed(2)}
    <br>
    The mod of ${num1} and ${num2} is = ${mod}
    `
)




