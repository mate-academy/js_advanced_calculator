'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const result = {
    add(num) {
      this.result += num;
    },
    subtract(num) {
      this.result -= num;
    },
    multiply(num) {
      this.result *= num;
    },
    divide(num) {
      this.result /= num;
    },
    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, num) {
      operation.call(this, num);

      return this;
    },

    result: 0,
  };

  return result;
}

module.exports = makeCalculator;
