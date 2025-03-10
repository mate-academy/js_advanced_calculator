'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  function add(value) {
    result += value;
  }

  function subtract(value) {
    result -= value;
  }

  function multiply(value) {
    result *= value;
  }

  function divide(value) {
    if (value !== 0) {
      result /= value;
    } else {
      throw new Error('Cannot divide by zero');
    }
  }

  function reset() {
    result = 0;

    return this;
  }

  function operate(callback, value) {
    callback(value);

    return this;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
