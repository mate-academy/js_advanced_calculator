'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(val) {
      this.result += val;

    },

    subtract(val) {
      this.result -= val;
    },

    multiply(val) {
      this.result *= val;
    },

    divide(val) {
      this.result /= val;
    },

    operate(method, val) {
      method.call(this, val);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}
module.exports = makeCalculator;
