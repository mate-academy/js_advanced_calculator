'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value) {
      this.result += value;

      return this;
    },

    subtract(value) {
      this.result -= value;

      return this;
    },

    multiply(value) {
      this.result *= value;

      return this;
    },

    divide(value) {
      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, nums) {
      if (typeof method !== 'function') {
        throw new TypeError('Callback must be a function');
      }
      method.call(this, nums);

      return this;
    },
  };
}

module.exports = makeCalculator;
