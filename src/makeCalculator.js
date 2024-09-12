'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function(a, b) {
      return a + b;
    },

    subtract: function(a, b) {
      return a - b;
    },

    multiply: function(a, b) {
      return a * b;
    },

    divide: function(a, b) {
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }

      return a / b;
    },

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(callback, number) {
      if (typeof callback === 'function') {
        this.result = callback.call(this, this.result, number);
      } else {
        throw new Error('Callback must be a function');
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
