'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function operate(callback, number) {
    result = callback(result, number);

    return api; // chaining
  }

  function reset() {
    result = 0;

    return api;
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

  const api = {
    operate,
    reset,
    add,
    subtract,
    multiply,
    divide,
    get result() {
      return result;
    },
  };

  return api;
}

module.exports = makeCalculator;
