"use strict";
//-----------------------------------------------------------------------------
const operations = {
    "add": { formula: ((x, y) => x + y), sign: "+" },
    "substract": { formula: ((x, y) => x - y), sign: "-" },
    "multiply": { formula: ((x, y) => x * y), sign: "*" },
    "divide": { formula: ((x, y) => x / y), sign: "/" }
};

let cache = {
    oldValue: 0, newValue: 0, operation: undefined
};
//-----------------------------------------------------------------------------
const history = document.getElementById('history');
const result = document.getElementById('result');
//-----------------------------------------------------------------------------
// const titulo = document.querySelector('h1');
const calculatorDiv = document.getElementById('calculator');

calculatorDiv.addEventListener("click", (e) => handleClick(e));

function handleClick(e) {
    switch (e.target.id) {
        case "clear": clearDigits(); break;
        case "equal": equal(); break;
        case "divide": case "multiply": case "substract": case "add":
            loadOperation(e.target.id); break;
        case "0": case "1": case "2": case "3": case "4":
        case "5": case "6": case "7": case "8": case "9":
            addDigit(e.target.id); break;
        default:
            break;
    }
}
//-----------------------------------------------------------------------------
function clearDigits() {
    if (cache.newValue === 0) {
        history.innerText = "";
        cache.operation = undefined;
        cache.oldValue = 0;
    } else {
        // result.innerText = ""
        cache.newValue = 0;
        showOperation();
    }
}
//-----------------------------------------------------------------------------
function addDigit(digit) {
    if (cache.operation === undefined) {
        cache.oldValue = Number(String(cache.oldValue) + digit);
    }
    else {
        cache.newValue = Number(String(cache.newValue) + digit);
    }
    showOperation();
}
//-----------------------------------------------------------------------------
function loadOperation(operator) {
    if (cache.oldValue === 0 && cache.newValue === 0) return
    showOperation();
    if (result.innerText !== "") {
        cache.oldValue = Number(result.innerText);
        cache.newValue = 0;
    }
    cache.operation = operations[operator];
    showOperation();
}
//-----------------------------------------------------------------------------
function showOperation(equal = "") {
    history.innerText = "";
    result.innerText = "";
    if (cache.oldValue === 0) return
    history.innerText = cache.oldValue;
    if (cache.operation === undefined) return
    history.innerText += " " + cache.operation.sign;
    if (cache.newValue === 0) return
    history.innerText += " " + cache.newValue + equal;
    result.innerText = cache.operation.formula(cache.oldValue, cache.newValue);
}
//-----------------------------------------------------------------------------
function equal(newOperator) {
    if (cache.operation === undefined) return
    if (cache.newValue === 0) return
    showOperation(" =");
    cache.newValue = 0;
    cache.oldValue = 0;
    cache.operation = undefined;
}