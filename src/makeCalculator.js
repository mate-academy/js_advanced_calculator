'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    reset() {
      calc.result = 0;

      return calc;
    },

    operate(callback, value) {
      callback(value);

      return calc;
    },

    add(value) {
      calc.result += value;
    },

    subtract(value) {
      calc.result -= value;
    },

    multiply(value) {
      calc.result *= value;
    },

    divide(value) {
      calc.result /= value;
    },
  };

  return calc;
}

module.exports = makeCalculator;
