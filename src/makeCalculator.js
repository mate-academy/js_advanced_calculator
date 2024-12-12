'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate: function (func, num) {
      func.call(this, num);

      return this;
    },
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
      this.result /= a;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
