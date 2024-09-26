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
    operate(operation, number) {
      this.result = operation(number, this.result);

      return this;
    },
    add(number, result) {
      return result + number;
    },
    subtract(number, result) {
      return result - number;
    },
    multiply(number, result) {
      return result * number;
    },
    divide(number, result) {
      if (number === 0 || result === 0) {
        throw new Error('Cannot execute division with zero');
      }

      return result / number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
