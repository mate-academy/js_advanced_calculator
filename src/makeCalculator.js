'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      this.result += number;
      console.log(this);
    },

    subtract(number) {
      this.result -= number;
    },

    divide(number) {
      this.result /= number;
    },

    multiply(number) {
      this.result *= number;
    },

    operate(method, number) {
      method.call(this, number);

      return this;
    }
  }
}

module.exports = makeCalculator;
