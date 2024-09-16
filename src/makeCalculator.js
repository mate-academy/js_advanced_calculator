'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
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
      if (num === 0) {
        throw new Error('Learn Math! There is no dividing with zero');
      }
      this.result /= num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(calculator, num) {
      calculator.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
