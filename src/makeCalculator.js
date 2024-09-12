'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,

    add: function(n) {
      return calculator.result + n;
    },
    subtract: function(n) {
      return calculator.result - n;
    },
    multiply: function(n) {
      return calculator.result * n;
    },
    divide: function(n) {
      return calculator.result / n;
    },

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(callback, n) {
      this.result = callback(n);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
