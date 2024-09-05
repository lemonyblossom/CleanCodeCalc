//Refoktoriserar class C (now class Calculator) att använda iterating function för operations istället för if else (första försöket var med switch, didnt like it)."

type OperationFunction = (valOne: number, valTwo: number) => number;

export default class Calculator {
    private lastResult: number;
    private operations: { [key: string]: OperationFunction }


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
    public calculate(valOne: number, valTwo: number, operation: string): number {
        const operationFunc = this.operations[operation];

        if (operationFunc) {
            this.lastResult = operationFunc(valOne, valTwo);
        } else {
            this.lastResult = 0;
        }

        return this.lastResult;
    }


    private calculateAreaOfCircle(radius: number): number {
        return Math.PI * Math.pow(radius, 2);
    }

    private sumUpTo(n: number): number {
        return Array.from({ length: n + 1 }, (_, i) => i).reduce((acc, val) => acc + val, 0);
    }

    public getLastResult(): number {
        return this.lastResult;
    }
}
