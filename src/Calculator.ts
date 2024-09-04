//Refoktoriserar "calculator att använda map för operations istället för if else (första försöket var med switch, didnt like it)."

type OperationFunction = (x: number, y: number) => number;

export default class Calculator {
    private lastResult: number;
    private operations: { [key: string]: OperationFunction }




    // varför är detta här? De ser ut att vara temporära under tiden metoden anropas och behöver därför ingen storing.
    //ska jag implementera möjligheten att utföra flera operationer efter varandra?..
    /*  this.valOne = 0;
      this.valTwo = 0;
  } */

    constructor() {
        this.lastResult = 0; //init

        this.operations = {
            "+": (x, y) => x + y,
            "-": (x, y) => x - y,
            "*": (x, y) => x * y,
            "/": (x, y) => x / y,
            "^": (x, y) => Math.pow(x, y),
            "%": (x, y) => x % y,
            "circle": (x, _) => this.calculateAreaOfCircle(x),
            "sumLoop": (x, _) => this.sumUpTo(x)
        };
    }

    public calculate(x: number, y: number, operation: string): number {
        const operationFunc = this.operations[operation];

        if (operationFunc) {
            this.lastResult = operationFunc(x, y);
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
