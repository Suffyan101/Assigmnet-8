
// Hate and Tale Game

// var a  = prompt("Hate or tale")
// var b = a.toLowerCase()
// var c= Math.floor(Math.random()*2)

// if(b === "hate" && c === 0){
//     alert("Win")
// }
// else if(b === "tale" && c === 1){
//     alert("Win")
// }
// else{
//     alert("Try again")
// }

// Dies Game

// alert("Ready")
// var c= Math.floor(Math.random()*6+1)
// document.write("Dies num is now is:" +c)

// Random Password Generator

var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
var b = ["G", "H", "J", "K", "L", "M", "N", "O", "P", "Q"]
var c = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var d = ["@", "!", ".", "/", "]", "[", "_", "#", ",", "^"]


    var randomCount = Math.floor(Math.random() * 9999)
    // console.log(randomCount)
    var numToString = randomCount.toString()
    var convertToArray = numToString.split("")

    var third = convertToArray[0]
    var third1 = convertToArray[1]
    var third2 = convertToArray[2]
    var third3 = convertToArray[3]
    
    var fourth = a[third]

    var fourth1 = b[third1]

    var fourth2 = c[third2]

    var fourth3 = d[third3]
    var array = fourth + fourth3 + fourth2 + fourth1
    document.write(array)


