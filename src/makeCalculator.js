'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    operate: function(callback, callbackValue) {
      callback(callbackValue);

      return this;
    },
    add: function(value) {
      calculator.result += value;

      return this;
    },
    subtract: function(value) {
      calculator.result = calculator.result - Math.abs(value);

      return this;
    },
    multiply: function(value) {
      calculator.result = calculator.result * value;
    },
    divide: function(value) {
      calculator.result = calculator.result / value;

      return this;
    },
    reset: function() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
