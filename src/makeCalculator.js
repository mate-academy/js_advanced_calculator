'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (num) {
      this.result += num;

      return this.result;
    },

    subtract: function (num) {
      this.result -= num;

      return this.result;
    },

    multiply: function (num) {
      this.result *= num;

      return this.result;
    },

    divide: function (num) {
      this.result /= num;

      return this.result;
    },

    operate: function (callback, num) {
      this.result = callback.call(this, num);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
