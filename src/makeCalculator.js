'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(result, number) {
      return result + number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    subtract(result, number) {
      return result - number;
    },

    multiply(result, number) {
      return result * number;
    },

    divide(result, number) {
      if (number !== 0) {
        return result / number;
      }

      return 0;
    },

    operate(action, number) {
      this.result = action(this.result, number);

      return this;
    },

  };
}

module.exports = makeCalculator;
