'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(num) {
      this.result += num;

      return this.result;
    },
    subtract(num) {
      this.result -= num;

      return this.result;
    },
    divide(num) {
      if (num === 0) {
        throw new Error('Division by zero');
      }

      this.result /= num;

      return this.result;
    },
    multiply(num) {
      this.result *= num;

      return this.result;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(method, num) {
      this.result = method.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
