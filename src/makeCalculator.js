'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      this.result = callback(this.result, number);

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
    divide(result, number) {
      if (number === 0) {
        return 'Error';
      }

      return result / number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
