
let displayValue = 0;
let currentNumber = 0;
let previousNumber = 0;
let currentOperator = "";
let sum = 0;
const numberButtons = document.querySelectorAll("[data-numberButton]");
const operatorButtons = document.querySelectorAll("[data-operatorButton]");
let currentDisplay = document.querySelector("#currentValue");
let previousDisplay = document.querySelector("#previousValue");
const equalButton = document.querySelector("[data-equals]");
equalButton.addEventListener("click", solution);
const clearButton = document.querySelector("[data-clear]");
clearButton.addEventListener("click", clear);

function clear() {
    displayValue = 0;
    currentNumber = 0; displayValue = 0;
    currentNumber = 0;
    previousNumber = 0;
    currentOperator = "";
    sum = 0;
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";

}

function setOperator() {
    operatorButtons.forEach((item) => {
        item.addEventListener("click", function () {
            let str = previousDisplay.textContent.charAt(previousDisplay.textContent.length - 1);
            if (str == "+" || str == "-" || str == "÷" || str == "x") {
                if (currentDisplay.textContent == "") {
                    return;
                }

            }
            operate(item.value);


        });

    });
}
function operate(input) {

    let previousOperator = currentOperator;

    if (previousOperator == "+") {
        currentNumber += displayValue;
    } else if (previousOperator == "-") {
        currentNumber -= displayValue;
    } else if (previousOperator == "x") {
        if (displayValue != 0) {
            currentNumber *= displayValue;
        }

    } else if (previousOperator == "÷") {
        if (displayValue != 0) {
            currentNumber /= displayValue;
        }

    } else {
        currentNumber = displayValue;

    }
    

    currentOperator = input;
    previousDisplay.textContent += currentDisplay.textContent + input;
    currentDisplay.textContent = "";


}


function solution() {

    if (currentOperator == "+") {
        sum = currentNumber + displayValue;
        currentDisplay.textContent = "";
        previousDisplay.textContent = "";
        currentDisplay.textContent = sum;
        currentNumber = sum;
        displayValue = 0;




    } else if (currentOperator == "-") {
        sum = currentNumber - displayValue;
        currentDisplay.textContent = "";
        previousDisplay.textContent = "";
        currentDisplay.textContent = sum;
        currentNumber = sum;
        displayValue = 0;



    } else if (currentOperator == "x") {
        sum = currentNumber * displayValue;
        currentDisplay.textContent = "";
        previousDisplay.textContent = "";
        currentDisplay.textContent = sum;
        currentNumber = sum;
        displayValue = 0;



    } else if (currentOperator == "÷") {
        sum = (currentNumber / displayValue);
        currentDisplay.textContent = "";
        previousDisplay.textContent = "";
        currentDisplay.textContent = sum;
        currentNumber = sum;
        displayValue = 0;


    }

    

}
function erase() {
    const eraseButton = document.querySelector("[data-erase]");
    eraseButton.addEventListener("click", () => {
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    });


}



function setNumber() {
    numberButtons.forEach((item) => {
        item.addEventListener("click", function () {
            display(item.value);

        });

    });
}



function display(input) {

    currentDisplay.textContent += "" + input;
    displayValue = Number(currentDisplay.textContent);
    

}
setNumber();
setOperator();
erase();



