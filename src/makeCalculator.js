'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(x) {
      this.result += x;

      return this;
    },

    subtract(x) {
      this.result -= x;

      return this;
    },

    multiply(x) {
      this.result *= x;

      return this;
    },

    divide(x) {
      if (x !== 0) {
        this.result /= x;
      } else {
        return 'Division by zero!';
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, operand) {
      operation.call(this, operand);

      return this;
    },

    get results() {
      return this.result;
    },
  };
}

module.exports = makeCalculator;
