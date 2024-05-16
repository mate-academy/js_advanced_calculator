'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(item) {
      this.result += item;
    },

    subtract(item) {
      this.result -= item;
    },

    multiply(item) {
      this.result *= item;
    },

    divide(item) {
      if (item !== 0) {
        this.result /= item;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, item) {
      callback.call(this, item);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
