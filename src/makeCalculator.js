'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const newCalculator = {

    result: 0,

    add(value) {
      newCalculator.result += value;
    },

    subtract(value) {
      newCalculator.result -= value;
    },

    multiply(value) {
      newCalculator.result *= value;
    },

    divide(value) {
      newCalculator.result /= value;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      callback(value);

      return this;
    },
  };

  return newCalculator;
}

module.exports = makeCalculator;
