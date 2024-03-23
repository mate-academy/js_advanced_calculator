'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
      if (x !== 0) {
        this.result /= x;
      } else {
        return 'Error';
      }

      return this;
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
