'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    operate(callback, value) {
      if (typeof value === 'number') {
        this.result = callback(value, this.result);

        return this;
      }
    },
    add(value, result) {
      return result + value;
    },
    subtract(value, result) {
      return result - value;
    },
    divide(value, result) {
      if (value !== 0) {
        return result / value;
      }

      throw new Error('error: division by zero is not possible');
    },
    multiply(value, result) {
      return result * value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
