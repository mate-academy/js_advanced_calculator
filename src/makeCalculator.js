'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function operate(callback, number) {
    result = callback(result, number);

    return this;
  }

  function reset() {
    result = 0;

    return this;
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
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error('Division by zero');
    }
  }

  return {
    get result() {
      return result;
    },
    operate,
    reset,
    add,
    subtract,
    multiply,
    divide,
  };
}

module.exports = makeCalculator;
