'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: function(value) {
      calculator.result += value;

      return calculator;
    },
    subtract: function(value) {
      calculator.result -= value;

      return calculator;
    },
    multiply: function(value) {
      calculator.result *= value;

      return calculator;
    },
    divide: function(value) {
      if (value === 0) {
        throw new Error('Division by zero is not allowed');
      }
      calculator.result /= value;

      return calculator;
    },
    reset: function() {
      calculator.result = 0;

      return calculator;
    },
    operate: function(callback, value) {
      return callback(value);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
