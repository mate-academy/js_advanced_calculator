'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function add(number) {
    result += number;
  }

  function subtract(number) {
    result -= number;
  }

  function multiply(number) {
    result *= number;
  }

  function divide(number) {
    if (number === 0) {
      throw new Error('Division by zero is not allowed');
    }
    result /= number;
  }

  function reset() {
    result = 0;

    return this; // Add this line to return the calculator object.
  }

  function operate(callback, number) {
    callback(number);

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
