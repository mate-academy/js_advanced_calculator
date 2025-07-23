'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const calculator = {
    get result() {
      return result;
    },
    add,
    subtract,
    multiply,
    divide,
    reset() {
      result = 0;

      return calculator;
    },
    operate(callback, value) {
      result = callback(result, value);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
