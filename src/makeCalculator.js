'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculatorObj = {
    result: 0,
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
    operate(callback, num) {
      callback.bind(this)(num);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculatorObj;
}

module.exports = makeCalculator;
