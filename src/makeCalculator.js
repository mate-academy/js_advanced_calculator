'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add: function (x) {
      this.result += x;

      return this;
    },
    subtract: function (x) {
      this.result -= x;

      return this;
    },
    multiply: function (x) {
      this.result *= x;

      return this;
    },
    divide: function (x) {
      if (x === 0) {
        throw new Error('Cannot divide by zero');
      }
      this.result /= x;

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (callback, x) {
      return callback.call(this, x);
    },
  };
}

module.exports = makeCalculator;
