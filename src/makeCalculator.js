'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(x) {
      this.result += x;
    },

    subtract(x) {
      this.result -= x;
    },

    multiply(x) {
      this.result *= x;
    },

    divide(x) {
      if (x === 0) {
        throw new Error(
          'Theoretically, it could be infinity, ' +
            'but mostly they say that you cannot divide by zero',
        );
      }

      this.result /= x;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, x) {
      operation.call(this, x);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
