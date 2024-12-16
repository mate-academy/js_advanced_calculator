'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(x) {
      calc.result += x;
    },
    subtract(x) {
      calc.result -= x;
    },
    multiply(x) {
      calc.result *= x;
    },
    divide(x) {
      calc.result = x !== 0 ? (calc.result /= x) : (calc.result = 0);
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
