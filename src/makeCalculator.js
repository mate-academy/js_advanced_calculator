'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const methods = {
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

        return this;
      } else {
        throw new Error('Cannot divide by 0.');
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

  return methods;
}

module.exports = makeCalculator;
