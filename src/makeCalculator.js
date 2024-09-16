'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {

    result: 0,

    operate(method, value) {
      method.call(this, value);

      return this;
    },

    add(value) {
      this.result += value;
    },

    multiply(value) {
      this.result *= value;
    },

    subtract(value) {
      this.result -= value;
    },

    divide(value) {
      this.result /= value;
    },

    reset() {
      this.result = 0;

      return this;
    },

  };

  return obj;
}

module.exports = makeCalculator;
