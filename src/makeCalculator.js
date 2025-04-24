'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const CALCULATOR = {
    result: 0,

    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },

    add(result, num) {
      return result + num;
    },

    subtract(result, num) {
      return result - num;
    },

    multiply(result, num) {
      return result * num;
    },

    divide(result, num) {
      if (num === 0) {
        throw new Error(`You can't divide by zero.`);
      }

      return result / num;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return CALCULATOR;
}

module.exports = makeCalculator;
