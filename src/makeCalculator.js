'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
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
      if (number === 0) {
        this.result = 'Error: We cannot divide null';
      } else {
        this.result /= number;
      }
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
}

module.exports = makeCalculator;
