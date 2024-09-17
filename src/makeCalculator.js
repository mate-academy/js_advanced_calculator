'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function(value) {
      this.result += value;

      return this;
    },

    subtract: function(value) {
      this.result -= value;

      return this;
    },

    multiply: function(value) {
      this.result *= value;

      return this;
    },

    divide: function(value) {
      if (value !== 0) {
        this.result /= value;
      } else {
        return 'Cannot be divided by zero';
      }

      return this;
    },

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(callback, value) {
      return callback.call(this, value);
    },
  };
}

module.exports = makeCalculator;
