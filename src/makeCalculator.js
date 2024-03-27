'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(input) {
      return (this.result += input);
    },
    subtract(input) {
      return (this.result -= input);
    },
    multiply(input) {
      return (this.result *= input);
    },
    divide(input) {
      if (input === 0) {
        return 'error';
      }

      return (this.result /= input);
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
