'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(action, value) {
      this.result = action(this.result, value);

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
      return result / num;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
