'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    add: function(number) {
      calculator.result += number;

      return calculator;
    },

    subtract: function(number) {
      calculator.result -= number;

      return calculator;
    },

    multiply: function(number) {
      calculator.result *= number;

      return calculator;
    },

    divide: function(number) {
      calculator.result /= number;

      return calculator;
    },

    reset: function() {
      calculator.result = 0;

      return calculator;
    },

    operate: function(callback, number) {
      callback(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
