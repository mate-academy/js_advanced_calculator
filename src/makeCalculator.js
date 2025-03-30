'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

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

  function operate(callback, num) {
    result = callback(result, num);

    return this;
  }

  function reset() {
    result = 0;

    return this;
  }

  return {
    get result() {
      return result;
    },
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
  };
}

module.exports = makeCalculator;
