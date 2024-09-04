import { describe, expect, it } from '@jest/globals';
import Calculator from './src/Calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should add two numbers when operation is "+"', () => {
        const result = calculator.calculate(3, 2, '+');
        expect(result).toBe(5);
    });

    it('should subtract two numbers when operation is "-"', () => {
        const result = calculator.calculate(5, 3, '-');
        expect(result).toBe(2);
    });

    it('should multiply two numbers when operation is "*"', () => {
        const result = calculator.calculate(4, 3, '*');
        expect(result).toBe(12);
    });

    it('should divide two numbers when operation is "/"', () => {
        const result = calculator.calculate(10, 2, '/');
        expect(result).toBe(5);
    });

    it('should calculate the power when operation is "^"', () => {
        const result = calculator.calculate(2, 3, '^');
        expect(result).toBe(8);
    });

    it('should calculate the remainder when operation is "%"', () => {
        const result = calculator.calculate(10, 3, '%');
        expect(result).toBe(1);
    });

    it('should calculate the area of a circle when operation is "circle"', () => {
        const result = calculator.calculate(3, 0, 'circle');
        expect(result).toBeCloseTo(28.274333882308138); // math.pi * 3 * 3 = 28.26
    });

    it('should return magic number 0 for undefined operations', () => {
        const result = calculator.calculate(5, 5, '?');
        expect(result).toBe(0);
    });

    it('should calculate the sum of all numbers up to 0', () => {
        const result = calculator.calculate(0, 0, 'sumLoop');
        expect(result).toBe(0);
    });

    it('should calculate the sum of all numbers up to 1', () => {
        const result = calculator.calculate(1, 0, 'sumLoop');
        expect(result).toBe(1); // 0 + 1 = 1
    });

    it('should calculate the sum of all numbers up to 5', () => {
        const result = calculator.calculate(5, 0, 'sumLoop');
        expect(result).toBe(15); // 0 + 1 + 2 + 3 + 4 + 5 = 15
    });

    it('should calculate the sum of all numbers up to 10', () => {
        const result = calculator.calculate(10, 0, 'sumLoop');
        expect(result).toBe(55); // 0 + 1 + 2 + ... + 10 = 55
    });

    it('should calculate the sum of all numbers up to 100', () => {
        const result = calculator.calculate(100, 0, 'sumLoop');
        expect(result).toBe(5050); // 0 + 1 + 2 + ... + 100 = 5050
    });
});