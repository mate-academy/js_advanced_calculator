'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function operate(callback, value) {
    callback(value);

    return this;
  }

  function reset() {
    result = 0;

    return this;
  }

  function add(value) {
    result += value;

    return this;
  }

  function subtract(value) {
    result -= value;

    return this;
  }

  function multiply(value) {
    result *= value;

    return this;
  }

  function divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    result /= value;

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
    operate,
    reset,
  };
}

module.exports = makeCalculator;
