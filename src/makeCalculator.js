'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function(number) {
      this.result += number;

      return this;
    },

    subtract: function(number) {
      this.result -= number;

      return this;
    },

    multiply: function(number) {
      this.result *= number;

      return this;
    },

    divide: function(number) {
      if (number !== 0) {
        this.result /= number;
      }

      return this;
    },

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(operation, number) {
      operation.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
