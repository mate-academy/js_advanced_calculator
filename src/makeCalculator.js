'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    divide(value) {
      this.result /= value;
    },

    add(value) {
      this.result += value;
    },

    subtract(value) {
      if (value !== 0) {
        this.result -= value;
      }
    },

    multiply(value) {
      this.result *= value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(action, value) {
      action.call(this, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
