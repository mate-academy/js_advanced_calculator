'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, val) {
      operation.call(this, val);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(num) {
      this.result += num;
    },

    subtract(num) {
      this.result -= num;
    },

    multiply(num) {
      this.result *= num;
    },

    divide(num) {
      if (num === 0) {
        return this;
      }

      this.result /= num;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
