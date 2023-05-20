'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

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

    operate: function(callback, number) {
      callback.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
