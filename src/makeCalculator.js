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
    multiply(num) {
      this.result *= num;

      return this.result;
    },
    divide(num) {
      this.result /= num;

      return this.result;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      callback.call(this, value);

      return this;
    },

    get finalResult() {
      return this.result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
