'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const objectCalculator = {
    result: 0,

    operate(callback, x) {
      callback(x);

      return this;
    },
    add(x) {
      objectCalculator.result += x;

      return this;
    },
    multiply(x) {
      objectCalculator.result *= x;

      return this;
    },
    subtract(x) {
      objectCalculator.result -= x;

      return this;
    },
    divide(x) {
      objectCalculator.result /= x;

      return this;
    },
    reset() {
      objectCalculator.result = 0;

      return this;
    },
  };

  return objectCalculator;
}

module.exports = makeCalculator;
