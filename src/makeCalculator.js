'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(a) {
      this.result += a;

      return this;
    },

    subtract(a) {
      this.result -= a;

      return this;
    },

    multiply(a) {
      this.result *= a;

      return this;
    },

    divide(a) {
      if (a !== 0) {
        this.result /= a;
      } else {
        return 'you can`t divide by zero';
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      callback.bind(this)(number);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
