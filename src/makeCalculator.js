'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    add(n) {
      this.result += n;

      return this;
    },

    subtract(n) {
      this.result -= n;

      return this;
    },
    multiply(n) {
      this.result *= n;

      return this;
    },

    divide(n) {
      if (n === 0) {
        throw new Error('TypeError: Division by zero.');
      }
      this.result /= n;

      return this;
    },
    operate(callback, n) {
      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function');
      }

      callback.call(this, n);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
