'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add,
    multiply,
    subtract,
    divide,
    reset,
    operate,
  };

  function add(number) {
    calculator.result += number;
  }

  function subtract(number) {
    calculator.result -= number;
  }

  function multiply(number) {
    calculator.result *= number;
  }

  function divide(number) {
    calculator.result /= number;
  }

  function reset() {
    calculator.result = 0;

    return calculator;
  }

  function operate(callback, number) {
    callback(number);

    return calculator;
  }

  return calculator;
}

module.exports = makeCalculator;
