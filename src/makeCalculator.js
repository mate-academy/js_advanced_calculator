'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(a = 0) {
      return (this.result += a);
    },
    subtract(a = 0) {
      return (this.result -= a);
    },
    multiply(a = 0) {
      return (this.result *= a);
    },
    divide(a) {
      return (this.result /= a);
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, operand) {
      this.result = callback.call(this, operand);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
