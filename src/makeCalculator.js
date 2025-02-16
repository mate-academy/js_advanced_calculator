'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(num) {
      return calc.result + num;
    },

    subtract(num) {
      return calc.result - num;
    },

    multiply(num) {
      return calc.result * num;
    },

    divide(num) {
      return calc.result / num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(number);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
