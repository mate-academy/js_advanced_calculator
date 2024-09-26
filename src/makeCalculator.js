'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calc = {
    result: 0,

    reset() {
      calc.result = 0;

      return this;
    },

    operate(callback, num) {
      callback(num);

      return this;
    },

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
  };

  return calc;
}

module.exports = makeCalculator;
