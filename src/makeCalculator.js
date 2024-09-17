'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add: function(value) {
      result += value;

      return this;
    },

    subtract: function(value) {
      result -= value;

      return this;
    },

    multiply: function(value) {
      result *= value;

      return this;
    },

    divide: function(value) {
      if (value === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      result /= value;

      return this;
    },

    reset: function() {
      result = 0;

      return this;
    },

    operate: function(callback, value) {
      callback(value);

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
