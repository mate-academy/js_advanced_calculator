'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(digit) {
      this.result += digit;
    },
    subtract(digit) {
      this.result -= digit;
    },
    multiply(digit) {
      this.result *= digit;
    },
    divide(digit) {
      this.result /= digit;
    },
    operate(calculate, digit) {
      calculate.call(this, digit);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
