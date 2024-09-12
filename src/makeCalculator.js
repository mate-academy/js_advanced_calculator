'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate: function(callback, number) {
      callback(number);

      return calculator;
    },
    add: function(number) {
      calculator.result += number;
    },
    subtract: function(number) {
      calculator.result -= number;
    },
    multiply: function(number) {
      calculator.result *= number;
    },
    divide: function(number) {
      calculator.result /= number;
    },
    reset: function() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
