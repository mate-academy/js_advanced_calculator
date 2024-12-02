'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function operate(operation, value) {
    result = operation(result, value);

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

  function reset() {
    result = 0;

    return calculator;
  }

  const calculator = {
    get result() {
      return result;
    },
    operate,
    add,
    subtract,
    multiply,
    divide,
    reset,
  };

  return calculator;
}

module.exports = makeCalculator;
