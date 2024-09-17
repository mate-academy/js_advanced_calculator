'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    add: function(num) {
      calculator.result += num;
    },

    subtract: function(num) {
      calculator.result -= num;
    },

    divide: function(num) {
      calculator.result /= num;
    },

    multiply: function(num) {
      calculator.result *= num;
    },

    reset: function() {
      calculator.result = 0;

      return calculator;
    },

    operate: function(callback, num) {
      callback(num);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
