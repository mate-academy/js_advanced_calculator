'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: function (a) {
      this.result += a;
    },

    subtract: function (a) {
      this.result -= a;
    },

    multiply: function (a) {
      this.result *= a;
    },

    divide: function (a) {
      if (a !== 0) {
        this.result /= a;
      } else {
        return 'Cannot divide by zero';
      }
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (callback, number) {
      callback.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
