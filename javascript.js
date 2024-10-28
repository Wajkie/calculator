

let methodWindow = document.getElementById("method");
let firstValueWindow = document.getElementById("firstValue");
let secondValueWindow = document.getElementById("secondValue");
let resultWindow = document.getElementById("result");
let errorMsg = document.getElementById("errors");
const numButton = document.getElementsByClassName("number");
const display = document.querySelector("#firstValue");
const displaySecond = document.querySelector("#secondValue");
let selectedMethods = false;
for (var i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener('click', valueInput, false);
}
const methodButton = document.getElementsByClassName("method");
for (var i = 0; i < methodButton.length; i++) {
    methodButton[i].addEventListener('click', selectedMethod, false);
}

function selectedMethod() {
    let check = firstValueWindow.innerHTML;
    console.log(check);
    if (!check =="") {
        
        methodWindow.innerHTML = this.innerHTML;
        selectedMethods = true;
    }else {
        selectedMethods = false;
        errorMsg.innerHTML= "Ange första talet";
    }    
}
function valueInput() {
    document.getElementById("result").innerHTML = "";
    errorMsg.innerHTML= "";
    if (!selectedMethods) {
        firstValueWindow.innerHTML += this.innerHTML;
    }else {
        secondValueWindow.innerHTML += this.innerHTML;
    }    
}
const calculate = function() {
    let method = methodWindow.innerHTML;
    let firstValue = firstValueWindow.innerHTML;
    let secondValue = secondValueWindow.innerHTML;
    let result;
    if (!(method == "" || firstValue == ""|| secondValue == "")) {
    switch(method) {
        case '-':
          result = firstValue - secondValue;
          break;
        case '+':
        result = Number(firstValue) + Number(secondValue);
            break;
        case '*':
        result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
    }
    resultWindow.innerHTML = `${firstValue} ${method} ${secondValue} = ${result}`;
    smallReset();
    console.log(result);
    }else {
        errorMsg.innerHTML= "Du måste ange tal och räknesätt!";
    }
}
const reset = () => {

    method.innerHTML = "";
    firstValue.innerHTML = "";
    secondValue.innerHTML = "";
    resultWindow.innerHTML = "&emsp;";
    selectedMethods = false;
    errorMsg.innerHTML= "";
}
const smallReset = () => {
    method.innerHTML = "";
    firstValue.innerHTML = "&emsp;";
    secondValue.innerHTML = "";
    selectedMethods = false;
    errorMsg.innerHTML= "";
}