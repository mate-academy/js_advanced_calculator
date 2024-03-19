'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      this.result += value;

      return this.result;
    },

    subtract(value) {
      this.result -= value;

      return this.result;
    },

    multiply(value) {
      this.result *= value;

      return this.result;
    },

    divide(value) {
      if (value === 0) {
        return 'Cannot divide by 0';
      } else {
        this.result /= value;

        return this.result;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
