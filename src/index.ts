import Calculator from './Calculator';

const calculator = new Calculator();

function performCalculation() {
   const valOne = parseFloat((<HTMLInputElement>document.getElementById('valOne')).value);
   const valTwo = parseFloat((<HTMLInputElement>document.getElementById('valTwo')).value);
   const operation = (<HTMLSelectElement>document.getElementById('operation')).value;

   const result = calculator.calculate(valOne, isNaN(valTwo) ? 0 : valTwo, operation);

   const resultDiv = document.getElementById('result');
   if (resultDiv) {
      resultDiv.textContent = `Result: ${result}`;
   }
}

(window as any).performCalculation = performCalculation;
