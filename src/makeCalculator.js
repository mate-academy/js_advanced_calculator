'use strict';

/*
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, n = this.result) {
      return callback.call(this, n);
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
        throw new Error('You can not divide on 0');
      }

      this.result /= n;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
