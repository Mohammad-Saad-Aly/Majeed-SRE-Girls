// var user = prompt("Enter your name", "abcd")
// alert(user)

// var num = +prompt("Enter any value")
// document.writeln(typeof(num))

// var num1 = +prompt("Enter any value")
// var num2 = +prompt("Enter any value")
// var add = num1 + num2
// document.writeln(add)

//  = assigning operator
//  == equals to ?

// if(5 === "5"){
//     document.writeln('okay')
// }

// var age = +prompt("Enter your age")
// if(age >= 18){
//     document.writeln("lele loan.")
// }
// else{
//     document.writeln("tum chote bachi/bacha ho")
// }

document.writeln('<center> ------ Marksheet -------- </center> <hr>')

var studentName = prompt("Enter your name")
var bio = +prompt("Enter bio marks")
var chem = +prompt("Enter chem marks")
var fsx = +prompt("Enter fsx marks")
var eng = +prompt("Enter english marks")
var urdu = +prompt("Enter urdu marks")
var obtainedMarks = bio + chem + fsx + eng + urdu
var perc = (obtainedMarks / 500) * 100
var grade;

if(perc >= 80){
    grade = "A+"
}
else if (perc >= 70){
    grade = "A"
}

else if (perc >= 60){
    grade = "B"
}

else if (perc >= 50){
    grade = "C"
}

else if (perc >= 40){
    grade = "D"
}

else {
    grade = "F"
}


document.writeln(
    `
     <table border=''>
        <tr> 
            <th> NAME </th>
            <th> BIO </th>
            <th> CHEM </th>
            <th> FSX </th>
            <th> ENG </th>
            <th> URDU </th>
            <th> TOTAL </th>
            <th> PERCENTAGE </th>
            <th> GRADE </th>
        </tr>

        <tr>
            <td> ${studentName} </td>
            <td> ${bio} </td>
            <td> ${chem} </td>
            <td> ${fsx} </td>
            <td> ${eng} </td>
            <td> ${urdu} </td>
            <td> ${obtainedMarks} </td>
            <td> ${perc} </td>
            <td> ${grade} </td>
        </tr>
     </table>   
    `
)













