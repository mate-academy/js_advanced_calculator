'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, number) {
      operation.call(this, number);

      return this;
    },

    add(x) {
      this.result += x;
    },

    subtract(x) {
      this.result -= x;
    },

    divide(x) {
      if (x === 0) {
        return new Error('Сannot be divided by zero');
      }
      this.result /= x;
    },

    multiply(x) {
      this.result *= x;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
