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
      this.result /= number;
    },

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(calculator, number) {
      calculator.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
