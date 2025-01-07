'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculatorResult = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(value) {
      this.result += value;

      return this.result;
    },
    subtract(value) {
      this.result -= value;

      return this.result;
    },
    multiply(value) {
      this.result *= value;

      return this.result;
    },
    divide(value) {
      this.result /= value;

      return this.result;
    },
    operate(callback, num) {
      this.result = callback.call(this, num);

      return this;
    },
  };

  return calculatorResult;
}

module.exports = makeCalculator;
