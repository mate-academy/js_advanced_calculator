'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, number) {
      this.result = operation(this.result, number);

      return this;
    },

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
  };

  return calculator;
}

module.exports = makeCalculator;
