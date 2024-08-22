'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, value) {
  // write code here

  const calculator = {
    operate(callback, num) {
      callback.call(this, num);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    result: 0,

    add: function (number) {
      this.result += number;
    },

    subtract: function (number) {
      this.result -= number;
    },

    divide: function (number) {
      this.result /= number;
    },

    multiply: function (number) {
      this.result *= number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
