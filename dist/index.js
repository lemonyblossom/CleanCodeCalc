"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = __importDefault(require("./Calculator"));
const calculator = new Calculator_1.default();
function performCalculation() {
    const valOne = parseFloat(document.getElementById('valOne').value);
    const valTwo = parseFloat(document.getElementById('valTwo').value);
    const operation = document.getElementById('operation').value;
    const result = calculator.calculate(valOne, isNaN(valTwo) ? 0 : valTwo, operation);
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = `Result: ${result}`;
    }
}
window.performCalculation = performCalculation;
