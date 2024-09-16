'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
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
      if (callback === this.add) {
        this.add(number);
      }

      if (callback === this.subtract) {
        this.subtract(number);
      }

      if (callback === this.multiply) {
        this.multiply(number);
      }

      if (callback === this.divide) {
        this.divide(number);
      }

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;
