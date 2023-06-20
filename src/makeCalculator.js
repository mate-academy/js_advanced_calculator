'use strict';
/*
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,
    add(n) {
      calculator.result += n;
    },
    subtract(n) {
      this.result -= n;
    },
    multiply(n) {
      this.result *= n;
    },
    divide(n) {
      this.result /= n;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number = 0) {
      callback.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
