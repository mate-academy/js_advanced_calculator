'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const obj = {
    result: 0,
    operate: function (callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    divide: function (a, b) {
      return a / b;
    },
    multiply: function (a, b) {
      return a * b;
    },
  };

  return obj;
}

module.exports = makeCalculator;
