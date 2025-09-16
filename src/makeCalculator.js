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
    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },
    add(current, value) {
      return current + value;
    },
    subtract(current, value) {
      return current - value;
    },
    multiply(current, value) {
      return current * value;
    },
    divide(current, value) {
      return current / value;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
