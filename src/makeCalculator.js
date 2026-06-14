'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function operate(operation, operand) {
    result = operation(result, operand);
    return calculator;
  }

  function reset() {
    result = 0;
    return calculator;
  }

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  const calculator = {
    operate,
    reset,
    add,
    subtract,
    multiply,
    divide,
    get result() {
      return result;
    }
  };

  return calculator;
}

module.exports = makeCalculator;
