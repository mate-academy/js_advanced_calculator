'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    multiply(value) {
      this.result *= value;
    },
    divide(value) {
      if (value === 0) {
        throw new Error('the value must not equal to 0');
      }
      this.result /= value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
      }
      callback.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
