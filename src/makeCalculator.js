'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(action, number) {
      action.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      this.result += number;

      return this;
    },

    subtract(number) {
      this.result -= number;

      return this;
    },

    multiply(number) {
      this.result *= number;

      return this;
    },

    divide(number) {
      if (number === 0) {
        throw new Error('Division by zero');
      }
      this.result /= number;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
