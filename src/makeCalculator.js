'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    operate(callback, operand) {
      callback.call(this, operand);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(operand) {
      this.result += operand;

      return this;
    },

    subtract(operand) {
      this.result -= operand;

      return this;
    },

    multiply(operand) {
      this.result *= operand;

      return this;
    },

    divide(operand) {
      this.result /= operand;

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
