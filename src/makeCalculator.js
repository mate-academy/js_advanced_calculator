'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(calc, x) {
      calc.result += x;
    },
    subtract(calc, x) {
      calc.result -= x;
    },
    multiply(calc, x) {
      calc.result *= x;
    },
    divide(calc, x) {
      calc.result /= x;
    },

    operate(operation, value) {
      operation(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
