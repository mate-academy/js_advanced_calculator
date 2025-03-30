'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(total, number) {
      return total + number;
    },

    subtract(total, number) {
      return total - number;
    },

    multiply(total, number) {
      return total * number;
    },

    divide(total, number) {
      return total / number;
    },

    operate(operation, number) {
      this.result = operation(this.result, number);

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
