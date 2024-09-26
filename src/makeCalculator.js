'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, param) {
      callback.call(this, param);

      return this;
    },
    add(val) {
      this.result += val;
    },

    subtract(val) {
      this.result -= val;
    },

    divide(val) {
      this.result /= val;
    },

    multiply(val) {
      this.result *= val;
    },

  };

  return calculator;
}

module.exports = makeCalculator;
