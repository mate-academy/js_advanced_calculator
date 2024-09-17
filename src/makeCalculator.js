'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate,
    add,
    subtract,
    multiply,
    divide,
    reset,
    result: 0,
  };

  function operate(operation, number = 0) {
    operation.call(this, number);

    return this;
  }

  function add(number) {
    this.result += number;
  }

  function subtract(number) {
    this.result -= number;
  }

  function multiply(number) {
    this.result *= number;
  }

  function divide(number) {
    if (number === 0) {
      return 'division by zero is undefined';
    }

    this.result /= number;
  }

  function reset() {
    this.result = 0;

    return this;
  }

  return calculator;
}

module.exports = makeCalculator;
