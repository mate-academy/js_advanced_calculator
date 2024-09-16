'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(callback, operand) {
      callback.call(this, operand);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    multiply(value) {
      this.result *= value;
    },
    divide(value) {
      this.result /= value;
    },
  };
}

module.exports = makeCalculator;
