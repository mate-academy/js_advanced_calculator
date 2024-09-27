'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    multiply(value) {
      this.result *= value;
    },
    divide(value) {
      this.result /= value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
