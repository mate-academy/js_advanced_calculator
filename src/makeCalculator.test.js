'use strict';
/* global require, describe, test, expect */

const makeCalculator = require('./makeCalculator');

describe('sum', () => {
  test(`Function 'makeCalculator' should be declared`, () => {
    expect(makeCalculator).toBeInstanceOf(Function);
  });

  test(`Method 'result' should return result of type 'number'`, () => {
    const calculator = makeCalculator();

    expect(typeof calculator.result).toBe('number');
  });

  test(`input: const calculator = makeCalculator();
               calculator.operate(calculator.add, 10);
        expected output: calculator.result === 10`, () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.add, 10);

    expect(calculator.result).toBe(10);
  });

  test(`input: const calculator = makeCalculator();
               calculator.operate(calculator.subtract, 100);
        expected output: calculator.result === -100`, () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.subtract, 100);

    expect(calculator.result).toBe(-100);
  });

  test(`input: const calculator = makeCalculator();
               calculator
                .operate(calculator.add, 8)
                .operate(calculator.multiply, 8);
        expected output: calculator.result === 64`, () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.add, 8)
      .operate(calculator.multiply, 8);

    expect(calculator.result).toBe(64);
  });

  test(`input: const calculator = makeCalculator();
               calculator
                .operate(calculator.add, 27)
                .operate(calculator.divide, 3);
        expected output: calculator.result === 9`, () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.add, 27)
      .operate(calculator.divide, 3);

    expect(calculator.result).toBe(9);
  });

  test(`input: const calculator = makeCalculator();
               calculator
                .operate(calculator.add, 3)
                .operate(calculator.add, 20)
                .operate(calculator.subtract, 9);
        expected output: calculator.result === 14`, () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.add, 3)
      .operate(calculator.add, 20)
      .operate(calculator.subtract, 9);

    expect(calculator.result).toBe(14);
  });

  test(`input: const calculator = makeCalculator();
               calculator
                .operate(calculator.add, 3)
                .operate(calculator.add, 20)
                .reset()
                .operate(calculator.subtract, 9);
        expected output: calculator.result === -9`, () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.add, 3)
      .operate(calculator.add, 20)
      .reset()
      .operate(calculator.subtract, 9);

    expect(calculator.result).toBe(-9);
  });

  test(`input: const calculator = makeCalculator();
               calculator
                .operate(calculator.add, 2)
                .operate(calculator.multiply, 4)
                .reset()
                .operate(calculator.subtract, 5)
                .operate(calculator.multiply, 4)
        expected output: calculator.result === -20`, () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.add, 2)
      .operate(calculator.multiply, 4)
      .reset()
      .operate(calculator.subtract, 5)
      .operate(calculator.multiply, 4);

    expect(calculator.result).toBe(-20);
  });

  test(`input: const calculator = makeCalculator();
               calculator
                .operate(calculator.add, 2)
                .operate(calculator.multiply, 4)
                .operate(calculator.subtract, 5)
                .operate(calculator.multiply, 4)
        expected output: calculator.result === 12`, () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.add, 2)
      .operate(calculator.multiply, 4)
      .operate(calculator.subtract, 5)
      .operate(calculator.multiply, 4);

    expect(calculator.result).toBe(12);
  });

  test(`input: const calculator = makeCalculator();
               calculator
                .operate(calculator.subtract, -100)
                .operate(calculator.multiply, 4)
                .operate(calculator.add, 2)
                .operate(calculator.divide, 2)
        expected output: calculator.result === 201`, () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.subtract, -100)
      .operate(calculator.multiply, 4)
      .operate(calculator.add, 2)
      .operate(calculator.divide, 2);

    expect(calculator.result).toBe(201);
  });

  test(`input: const calculator = makeCalculator();
               calculator
                .operate(calculator.subtract, -100)
                .operate(calculator.multiply, 4)
                .reset()
                .operate(calculator.add, 2)
                .operate(calculator.divide, 2)
        expected output: calculator.result === 1`, () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.subtract, -100)
      .operate(calculator.multiply, 4)
      .reset()
      .operate(calculator.add, 2)
      .operate(calculator.divide, 2);

    expect(calculator.result).toBe(1);
  });
});
