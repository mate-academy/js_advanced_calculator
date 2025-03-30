'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate: function (operation, number = 0) {
      operation.call(this, number);

      return this;
    },

    add(number) {
      this.result += number;

      return this;
    },

    subtract(number) {
      this.result -= number;

      return this;
    },

    divide(number) {
      this.result /= number;

      return this;
    },

    multiply(number) {
      this.result *= number;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
