'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate(operation, num) {
      operation.call(this, num);

      return this;
    },
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

      if (num === 0) {
        return 'Error';
      }
    },
    reset(num) {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
