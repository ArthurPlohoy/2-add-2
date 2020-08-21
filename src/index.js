/* eslint-disable no-undef */
"use strict"

let container = document.createElement("div");
container.classList.add("container");
document.body.append(container);


let firstInput = document.createElement("input");
firstInput.id = "firstInput";
firstInput.classList.add("font");
container.append(firstInput);

let firstDiv = document.createElement("div");
firstDiv.id = "errorFirstDiv";
firstDiv.innerHTML = "Это не число!";
container.append(firstDiv);

let secondInput = document.createElement("input");
secondInput.id = 'secondInput';
secondInput.classList.add("font")
container.append(secondInput);

let secondDiv = document.createElement("div");
secondDiv.id = "errorSecondDiv";
secondDiv.innerHTML = "Это не число!";
container.append(secondDiv);

let text = document.createElement("div");
text.innerHTML = "=";
container.append(text);

// let result = document.createElement('input');
// result.classList.add('font');
// result.id = 'result';
// container.append(result);

let result = document.createElement("div");
result.id = 'result';
container.append(result);


let button = document.createElement("button");
button.classList.add("button");
container.append(button);
button.innerHTML = "Посчитать";
button.onclick = () => {
    let sum = parseFloat(firstInput.value)  + parseFloat(secondInput.value) ;
    if (parseFloat(sum) || firstInput || firstInput) {
        document.getElementById("result").innerHTML = +sum.toFixed(2);
    }
};


firstInput.addEventListener('input', valFirstInput);
secondInput.addEventListener('input', valSecondInput);

firstInput.addEventListener('input', verFirstInput);
secondInput.addEventListener('input', verSecondInput);

function valFirstInput() {
    let num = +firstInput.value
    if (!num && num!== 0 ) {
        firstInput.style.border = "solid red";
        errorFirstDiv.style.display = "block";
        firstInput.focus();
        return false;
    }
}

function valSecondInput() {
    let num = +secondInput.value
    if (!num && num!== 0) {
        secondInput.style.border = "solid red";
        errorSecondDiv.style.display = "block";
        secondInput.focus();
        return false;
    }
}

function verFirstInput() {
    let num = +firstInput.value
    if (num) {
        firstInput.style.border = "1px solid silver";
        errorFirstDiv.style.display = "none";
        return true;

    }
}

function verSecondInput() {
    let num = +secondInput.value
    if (num) {
        secondInput.style.border = "1px solid silver";
        errorSecondDiv.style.display = "none";
        return true;

    }
}
