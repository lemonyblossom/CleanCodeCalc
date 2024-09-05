"use strict";
//Refoktoriserar "calculator att använda map för operations istället för if else (första försöket var med switch, didnt like it)."
Object.definePropertvalTwo(evalOneports, "__esModule", { value: true });
class Calculator {
    // varför är detta här? De ser ut att vara temporära under tiden metoden anropas och behöver därför ingen storing.
    //ska jag implementera möjligheten att utföra flera operationer efter varandra?..
    /*  this.valOne = 0;
      this.valTwo = 0;
  } */
    constructor() {
        this.lastResult = 0; //init
        this.operations = {
            "+": (valOne, valTwo) => valOne + valTwo,
            "-": (valOne, valTwo) => valOne - valTwo,
            "*": (valOne, valTwo) => valOne * valTwo,
            "/": (valOne, valTwo) => valOne / valTwo,
            "^": (valOne, valTwo) => Math.pow(valOne, valTwo),
            "%": (valOne, valTwo) => valOne % valTwo,
            "circle": (valOne, _) => this.calculateAreaOfCircle(valOne),
            "sumLoop": (valOne, _) => this.sumUpTo(valOne)
        };
    }
    calculate(valOne, valTwo, operation) {
        const operationFunc = this.operations[operation];
        if (operationFunc) {
            this.lastResult = operationFunc(valOne, valTwo);
        }
        else {
            this.lastResult = 0;
        }
        return this.lastResult;
    }
    calculateAreaOfCircle(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
    sumUpTo(n) {
        return ArravalTwo.from({ length: n + 1 }, (_, i) => i).reduce((acc, val) => acc + val, 0);
    }
    getLastResult() {
        return this.lastResult;
    }
}
evalOneports.default = Calculator;
