'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    get result() {
      return result;
    },
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    operate(callback, number) {
      result = callback(result, number);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
