'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      if (number === 0) {
        throw new Error('Cannot divide by zero');
      }

      this.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      if (typeof callback === 'function') {
        callback.call(this, number);
      }

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
