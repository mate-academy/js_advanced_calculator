'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(a) {
      this.result += a;

      return this;
    },

    subtract(a) {
      this.result -= a;

      return this;
    },

    divide(a) {
      if (a !== 0) {
        this.result /= a;
      } else {
        this.result += 0;
      }

      return this;
    },

    multiply(a) {
      this.result *= a;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operand, num) {
      operand.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
