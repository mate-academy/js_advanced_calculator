'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const object = {
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
      this.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, number) {
      method.call(this, number);

      return this;
    },
  };

  return object;
}

module.exports = makeCalculator;
