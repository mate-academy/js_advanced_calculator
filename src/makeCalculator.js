'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    add: function(number) {
      calculator.result += number;

      return this;
    },

    subtract: function(number) {
      calculator.result -= number;

      return this;
    },

    multiply: function(number) {
      calculator.result *= number;

      return this;
    },

    divide: function(number) {
      calculator.result /= number;

      return this;
    },

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(callback, number) {
      callback(number);

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;
