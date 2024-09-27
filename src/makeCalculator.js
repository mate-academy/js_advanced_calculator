'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculateLogic = {
    result: 0,

    operate(callback, number) {
      callback(number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      calculateLogic.result += number;
    },

    subtract(number) {
      calculateLogic.result -= number;
    },

    multiply(number) {
      calculateLogic.result *= number;
    },

    divide(number) {
      calculateLogic.result /= number;
    },
  };

  return calculateLogic;
}

module.exports = makeCalculator;
