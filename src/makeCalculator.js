'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number, this);

      return this;
    },

    add(result, number) {
      return result + number;
    },

    subtract(result, number) {
      return result - number;
    },

    multiply(result, number) {
      return result * number;
    },

    divide(result, number, calculator) {
      if (number === 0) {
        return undefined;
      }

      calculator.result /= number;

      return calculator.result;
    },
  };

  return calc;
}

module.exports = makeCalculator;
