'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(currentValue, value) {
      return currentValue + value;
    },
    subtract(currentValue, value) {
      return currentValue - value;
    },
    multiply(currentValue, value) {
      return currentValue * value;
    },
    divide(currentValue, value) {
      return currentValue / value;
    },
    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
