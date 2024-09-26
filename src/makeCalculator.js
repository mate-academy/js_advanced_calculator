'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, a) {
      if (isNaN(a)) {
        return new Error(a + 'not a number');
      }

      operation.call(this, a);

      return this;
    },

    add(a) {
      this.result += a;
    },

    subtract(a) {
      this.result -= a;
    },

    multiply(a) {
      this.result *= a;
    },

    divide(a) {
      if (a === 0) {
        return new Error('Сannot be divided by zero');
      }

      this.result /= a;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
