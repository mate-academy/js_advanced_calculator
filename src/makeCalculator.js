'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let currentResult = 0;

  return {
    operate(operationFn, value) {
      currentResult = operationFn(currentResult, value);

      return this;
    },

    reset() {
      currentResult = 0;

      return this;
    },

    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    get result() {
      return currentResult;
    },
  };
}

module.exports = makeCalculator;
