'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    add(input) {
      this.result += input;

      return this;
    },
    multiply(input) {
      this.result *= input;

      return this;
    },
    subtract(input) {
      this.result -= input;

      return this;
    },
    divide(input) {
      this.result /= input;

      return this;
    },
    operate(callback, input) {
      callback.call(this, input);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
