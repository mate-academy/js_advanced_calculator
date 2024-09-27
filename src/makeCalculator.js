'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(num) {
      return (this.result += num);
    },
    subtract(num) {
      return (this.result -= num);
    },
    multiply(num) {
      return (this.result *= num);
    },
    divide(num) {
      return (this.result /= num);
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      callback.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
