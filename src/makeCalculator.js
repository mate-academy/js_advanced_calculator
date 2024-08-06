'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let currentResult = 0;

  return {
    get result() {
      return currentResult;
    },
    add(value) {
      currentResult += value;
    },
    subtract(value) {
      currentResult -= value;
    },
    multiply(value) {
      currentResult *= value;
    },
    divide(value) {
      if (value !== 0) {
        currentResult /= value;
      }
    },
    reset() {
      currentResult = 0;

      return this;
    },
    operate(callback, value) {
      callback.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
