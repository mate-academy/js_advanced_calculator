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

    add(value) {
      return (this.result += value);
    },

    subtract(value) {
      return (this.result -= value);
    },

    multiply(value) {
      return (this.result *= value);
    },

    divide(value) {
      if (value === 0) {
        return undefined;
      }

      return (this.result /= value);
    },

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
