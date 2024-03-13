'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function(num) {
      this.result += num;

      return this;
    },

    subtract: function(num) {
      this.result -= num;

      return this;
    },

    multiply: function(num) {
      this.result *= num;

      return this;
    },

    divide: function(num) {
      if (num === 0) {
        throw new Error('Cannot divide by zero!');
      }

      this.result /= num;

      return this;
    },

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(callback, num) {
      if (typeof callback !== 'function') {
        throw new Error('Passed callback is not a function!');
      }
      callback.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
