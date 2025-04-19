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
      this.result /= x;

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (callback, num) {
      callback.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
