'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

    add: function(number) {
      this.result += number;
    },

    subtract: function(number) {
      this.result -= number;
    },

    multiply: function(number) {
      this.result *= number;
    },

    divide: function(number) {
      this.result /= number;
    },

    reset: function() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
