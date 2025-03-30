'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculatorObj = {
    result: 0,

    add(a) {
      this.result += a;

      return this;
    },

    subtract(a) {
      this.result -= a;

      return this;
    },

    multiply(a) {
      this.result *= a;

      return this;
    },

    divide(a) {
      if (a === 0) {
        throw new Error('Can not divide by 0');
      }
      this.result /= a;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
  };

  return calculatorObj;
}

module.exports = makeCalculator;
