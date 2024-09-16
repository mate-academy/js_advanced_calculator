'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(res, number) {
      return res + number;
    },

    subtract(res, number) {
      return res - number;
    },

    multiply(res, number) {
      return res * number;
    },

    divide(res, number) {
      if (number !== 0) {
        return res / number;
      } else {
        return 'Cannot be divided by zero!';
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;
