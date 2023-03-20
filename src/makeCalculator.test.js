'use strict';
/* global require, describe, test, expect */

const makeCalculator = require('./makeCalculator');

describe('sum', () => {
  test("'makeCalculator' function should be declared", () => {
    expect(makeCalculator).toBeInstanceOf(Function);
  });

  test("'makeCalculator' should create a calculator object", () => {
    const calculator = makeCalculator();

    expect(calculator).not.toBe(null);
    expect(typeof calculator).toBe('object');
  });

  test("'calculator.result' property should be initialized with 0", () => {
    const calculator = makeCalculator();

    expect(calculator.result).toBe(0);
  });

  test("'calculator' should have an 'operate' method", () => {
    const calculator = makeCalculator();

    expect(calculator.operate).toBeDefined();
    expect(calculator.operate).toBeInstanceOf(Function);
  });

  test("'calculator' should have an 'add' method", () => {
    const calculator = makeCalculator();

    expect(calculator.add).toBeDefined();
    expect(calculator.add).toBeInstanceOf(Function);
  });

  test("'operate' should correctly add a single value", () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.add, 10);

    expect(calculator.result).toBe(10);
  });

  test("'calculator' should keep 'result' between 'operate' calls", () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.add, 10);
    calculator.operate(calculator.add, 20);
    calculator.operate(calculator.add, 30);

    expect(calculator.result).toBe(60);
  });

  test("'calculator' should have a 'subtract' method", () => {
    const calculator = makeCalculator();

    expect(calculator.subtract).toBeDefined();
    expect(calculator.subtract).toBeInstanceOf(Function);
  });

  test("'operate' should correctly subtract a single value", () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.subtract, 100);

    expect(calculator.result).toBe(-100);
  });

  test("'calculator' should have a 'multiply' method", () => {
    const calculator = makeCalculator();

    expect(calculator.multiply).toBeDefined();
    expect(calculator.multiply).toBeInstanceOf(Function);
  });

  test("'operate' should correctly multiply the result", () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.add, 3);
    calculator.operate(calculator.multiply, 7);

    expect(calculator.result).toBe(21);
  });

  test("'calculator' should have a 'divide' method", () => {
    const calculator = makeCalculator();

    expect(calculator.divide).toBeDefined();
    expect(calculator.divide).toBeInstanceOf(Function);
  });

  test("'operate' should correctly divide the result", () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.add, 27);
    calculator.operate(calculator.divide, 3);

    expect(calculator.result).toBe(9);
  });

  test("'operate' should support a chain call", () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.add, 10)
      .operate(calculator.subtract, 3);

    expect(calculator.result).toBe(7);
  });

  test("'operate' should correctly work in a long chain", () => {
    const calculator = makeCalculator();

    calculator
      .operate(calculator.subtract, 20)
      .operate(calculator.divide, 4)
      .operate(calculator.add, 3)
      .operate(calculator.multiply, 7);

    expect(calculator.result).toBe(-14);
  });

  test("'calculator' should have a 'reset' method", () => {
    const calculator = makeCalculator();

    expect(calculator.reset).toBeDefined();
    expect(calculator.reset).toBeInstanceOf(Function);
  });

  test("'reset' method should set the default value to 'result'", () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.add, 10);
    calculator.reset();

    expect(calculator.result).toBe(0);
  });

  test("'reset' method should correctly work in a chain", () => {
    const calculator = makeCalculator();

    calculator.operate(calculator.add, 3);

    calculator
      .reset()
      .operate(calculator.subtract, 9);

    expect(calculator.result).toBe(-9);
  });
});
