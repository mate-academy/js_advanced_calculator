'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
