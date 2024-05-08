'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: function (num) {
      calculator.result += num;

      return this;
    },

    subtract: function (num) {
      calculator.result -= num;

      return this;
    },

    multiply: function (num) {
      calculator.result *= num;

      return this;
    },

    divide: function (num) {
      calculator.result /= num;

      return this;
    },

    reset: function () {
      calculator.result = 0;

      return this;
    },

    operate: function (callback, value) {
      callback(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
