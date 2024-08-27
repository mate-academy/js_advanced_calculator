'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: function (x) {
      calculator.result += x;
    },
    subtract: function (x) {
      calculator.result -= x;
    },
    multiply: function (x) {
      calculator.result *= x;
    },
    divide: function (x) {
      calculator.result /= x;
    },
    reset: function () {
      calculator.result = 0;

      return this;
    },
    operate: function (callback, arg) {
      callback(arg);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
