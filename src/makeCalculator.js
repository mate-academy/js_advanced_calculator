'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    calculation: 0,

    reset() {
      this.calculation = 0;

      return this;
    },

    operate(func, num) {
      this.calculation = func(num, this.calculation);

      return this;
    },

    add(num, prevResult) {
      return prevResult + num;
    },

    subtract(num, prevResult) {
      return prevResult - num;
    },

    divide(num, prevResult) {
      return prevResult / num;
    },

    multiply(num, prevResult) {
      return prevResult * num;
    },
  };
}

module.exports = makeCalculator;
