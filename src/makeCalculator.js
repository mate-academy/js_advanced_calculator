'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(context, number) {
      context.result += number;
    },
    subtract(context, number) {
      context.result -= number;
    },
    multiply(context, number) {
      context.result *= number;
    },
    divide(context, number) {
      context.result /= number;
    },

    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      callback(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
