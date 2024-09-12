'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const objCalc = {
    result: 0,

    operate(callback, num) {
      callback.call(this, num);

      return this;
    },

    add(num = 0) {
      this.result += num;

      return this;
    },

    subtract(num = 0) {
      this.result -= num;

      return this;
    },

    multiply(num = 0) {
      this.result *= num;

      return this;
    },

    divide(num = 0) {
      this.result /= num;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return objCalc;
}

module.exports = makeCalculator;
