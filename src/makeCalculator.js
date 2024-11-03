'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    multiply(value) {
      this.result *= value;
    },

    divide(value) {
      this.result /= value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      if (typeof callback === 'function') {
        callback.call(this, number);

        return this;
      } else {
        throw new Error(`${callback} is not a function`);
      }
    },
  };

  return calculator;
}

module.exports = makeCalculator;
