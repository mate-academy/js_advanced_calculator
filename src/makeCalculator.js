'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,

    add: function (num) {
      this.result += num;
    },

    subtract: function (num) {
      this.result -= num;
    },

    multiply: function (num) {
      this.result *= num;
    },

    divide: function (num) {
      if (num !== 0) {
        this.result /= num;
      }
    },

    operate: function (callback, num) {
      callback.bind(this)(num);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
