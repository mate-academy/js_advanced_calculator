'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculatore = {
    result: 0,

    add(number) {
      calculatore.result += number;
    },

    subtract(number) {
      calculatore.result -= number;
    },

    multiply(number) {
      calculatore.result *= number;
    },

    divide(number) {
      calculatore.result /= number;
    },

    reset() {
      calculatore.result = 0;

      return this;
    },

    operate(callback, value) {
      callback(value);

      return this;
    },
  };

  return calculatore;
}

module.exports = makeCalculator;
