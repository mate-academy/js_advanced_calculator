'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    add(x) {
      this.result += x;

      return this;
    },
    subtract(y) {
      this.result -= y;

      return this;
    },
    multiply(w) {
      this.result *= w;

      return this;
    },
    divide(z) {
      this.result /= z;

      return this;
    },
    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
