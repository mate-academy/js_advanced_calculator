'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(value) {
      if (typeof value !== 'string') {
        calculator.result += value;
      }
    },
    subtract(value) {
      if (typeof value !== 'string') {
        calculator.result -= value;
      }
    },
    multiply(value) {
      if (typeof value !== 'string') {
        calculator.result *= value;
      }
    },
    divide(value) {
      if (typeof value !== 'string') {
        calculator.result /= value;
      }
    },
    reset(value) {
      if (typeof value !== 'string') {
        calculator.result = 0;

        return this;
      }
    },
    operate(callback, value) {
      callback(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
