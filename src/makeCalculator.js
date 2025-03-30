'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
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
    result /= value;
  }

  function reset() {
    result = 0;

    return calculator;
  }

  function operate(callback, value) {
    callback(value);

    return calculator;
  }

  const calculator = {
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

  return calculator;
}

module.exports = makeCalculator;
