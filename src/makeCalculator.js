'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const resultObject = {
    result: 0,

    add(a) {
      this.result += a;
    },

    subtract(a) {
      this.result -= a;
    },

    multiply(a) {
      this.result *= a;
    },

    divide(a) {
      this.result /= a;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      callback.call(this, value);

      return this;
    },
  };

  return resultObject;
}

module.exports = makeCalculator;
