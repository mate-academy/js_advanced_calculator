'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // private properties
  let result = 0;

  // constants
  const DIV_BY_ZERO_ERR_MSG = 'Division by zero is not allowed.';

  return {
    add(x) {
      result += x;

      return this;
    },

    subtract(x) {
      result -= x;

      return this;
    },

    multiply(x) {
      result *= x;

      return this;
    },

    divide(x) {
      if (x === 0) {
        throw new Error(DIV_BY_ZERO_ERR_MSG);
      }
      result /= x;

      return this;
    },

    reset() {
      result = 0;

      return this;
    },

    operate(operatorFunc, operand) {
      operatorFunc(operand);

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
