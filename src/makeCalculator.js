'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const resultObject = {
    result: 0,

    add(x) {
      this.result += x;
      return this;
    },

    subtract(x) {
      this.result -= x;
      return this;
    },

    multiply(x) {
      this.result *= x;
      return this;
    },

    divide(x) {
      this.result /= x;
      return this;
    },

    operate(callback, num) {
      callback.call(this, num);
      return this;
    },

    reset() {
      this.result = 0;
      return this;
    },
  };

  return resultObject;
}

module.exports = makeCalculator;
