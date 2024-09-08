'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calc = {
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
      this.result /= num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(func, num) {
      func.call(this, num);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
