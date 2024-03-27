'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(input) {
      this.result += input;

      return this.result;
    },
    subtract(input) {
      this.result -= input;

      return this.result;
    },
    multiply(input) {
      this.result *= input;

      return this.result;
    },
    divide(input) {
      if (input === 0) {
        return 'error';
      }

      this.result /= input;

      return this.result;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, input) {
      callback.call(this, input);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
