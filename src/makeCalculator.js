'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculate = {
    result: 0,

    add(result, number) {
      result += number;
    },

    subtract(result, number) {
      result -= number;
    },

    multiply(result, number) {
      result *= number;
    },

    divide(result, number) {
      result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      callback(this.result, number);

      return this;
    },
  };

  return calculate;
}

module.exports = makeCalculator;
