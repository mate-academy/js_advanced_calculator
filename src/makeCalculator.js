'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
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
      this.result /= num;
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
}

module.exports = makeCalculator;
