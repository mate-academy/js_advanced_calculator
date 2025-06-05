'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: (result, value) => result + value,
    subtract: (result, value) => result - value,
    multiply: (result, value) => result * value,
    divide: (result, value) => result / value,

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
