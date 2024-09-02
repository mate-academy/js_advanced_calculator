'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      calculator.result += value;

      return this;
    },
    subtract(value) {
      calculator.result -= value;

      return this;
    },
    multiply(value) {
      calculator.result *= value;

      return this;
    },
    divide(value) {
      calculator.result /= value;

      return this;
    },
    reset() {
      calculator.result = 0;

      return this;
    },
    operate(callback, value) {
      callback(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
