'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const obj = {
    result: 0,
    operate(method, arg) {
      method.call(this, arg);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(arg) {
      this.result += arg;
    },

    subtract(arg) {
      this.result -= arg;
    },

    multiply(arg) {
      this.result *= arg;
    },

    divide(arg) {
      this.result /= arg;
    },
  };

  return obj;
}

module.exports = makeCalculator;
