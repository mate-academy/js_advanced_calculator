'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(num) {
      calc.result += num;
    },

    subtract(num) {
      calc.result -= num;
    },

    multiply(num) {
      calc.result *= num;
    },

    divide(num) {
      calc.result /= num;
    },

    operate(callback, num) {
      callback(num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
