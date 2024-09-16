'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let output = 0;

  return {
    add(x) {
      output += x;

      return this;
    },

    subtract(x) {
      output -= x;

      return this;
    },

    multiply(x) {
      output *= x;

      return this;
    },

    divide(x) {
      output /= x;

      return this;
    },

    reset() {
      output = 0;

      return this;
    },

    operate(operation, operand) {
      operation(operand);

      return this;
    },

    get result() {
      return output;
    },
  };
}

module.exports = makeCalculator;
