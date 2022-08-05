function calcMultiply() {
    console.log("hello world")
    var num1 = document.getElementById("number1").value
    var num2 = document.getElementById("number2").value
    console.log(num1)
    console.log(num2)
    console.log(num1*num2)
    document.getElementById("answer").innerHTML = num1*num2
}

function calcAddition() {
    console.log("hello world")
    var num1 = document.getElementById("number1").value
    var num2 = document.getElementById("number2").value
    console.log(num1)
    console.log(num2)
    document.getElementById("answer").innerHTML = parseInt(num1) + parseInt(num2)
    
}

function calcSubtraction() {
    console.log("hello world")
    var num1 = document.getElementById("number1").value0



    
    var num2 = document.getElementById("number2").value
    console.log(num1)
    console.log(num2)
    document.getElementById("answer").innerHTML = parseInt(num1) - parseInt(num2)

}

function calcDivision() {
    console.log("hello world")
    var num1 = document.getElementById("number1").value
    var num2 = document.getElementById("number2").value
    console.log(num1)
    console.log(num2)
    document.getElementById("answer").innerHTML = parseInt(num1) / parseInt(num2)

}

function calcExponent() {
    console.log("hello world")
    var num1 = document.getElementById("number1").value
    var num2 = document.getElementById("number2").value
    console.log(num1)
    console.log(num2)
    document.getElementById("answer").innerHTML = parseInt(num1) ** parseInt(num2)

}