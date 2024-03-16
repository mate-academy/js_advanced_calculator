'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add(numeric) {
      this.result += numeric;

      return this;
    },
    subtract(numeric) {
      this.result -= numeric;

      return this;
    },
    multiply(numeric) {
      this.result *= numeric;

      return this;
    },
    divide(numeric) {
      this.result /= numeric;

      return this;
    },
    operate(calculator, numeric) {
      return calculator.call(this, numeric);
    },
    reset() {
      this.result = 0;

      return this;
    },
    result: 0,
  };
}

module.exports = makeCalculator;
