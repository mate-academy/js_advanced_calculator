'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculate = {
    result: 0,

    add(num) {
      this.result += num;
    },

    subtract(num) {
      this.result -= num;
    },

    multiply(num) {
      this.result *= num;
    },

    divide(num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        return this;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(func, n) {
      func.call(this, n);

      return this;
    },
  };

  return calculate;
}

module.exports = makeCalculator;
