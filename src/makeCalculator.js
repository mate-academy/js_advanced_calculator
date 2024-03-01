'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    add: function (num) {
      calculator.result += num;

      return calculator;
    },

    subtract: function (num) {
      calculator.result -= num;

      return calculator;
    },

    multiply: function (num) {
      calculator.result *= num;

      return calculator;
    },

    divide: function (num) {
      if (num !== 0) {
        calculator.result /= num;
      } else {
        return 'Cannot divide by zero.';
      }

      return calculator;
    },

    reset: function () {
      calculator.result = 0;

      return calculator;
    },

    operate: function (callback, num) {
      callback(num);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
