'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, operands) {
  return {
    result: 0,

    operate(callback, amount) {
      callback.call(this, amount);

      return this;
    },
    add(amount) {
      this.result += amount;

      return this;
    },
    subtract(amount) {
      this.result -= amount;

      return this;
    },
    multiply(amount) {
      this.result *= amount;

      return this;
    },
    divide(amount) {
      this.result /= amount;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
