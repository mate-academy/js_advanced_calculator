'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add: function(num) {
      result += num;

      return this;
    },

    subtract: function(num) {
      result -= num;

      return this;
    },

    multiply: function(num) {
      result *= num;

      return this;
    },

    divide: function(num) {
      result /= num;

      return this;
    },

    reset: function() {
      result = 0;

      return this;
    },

    operate: function(callback, num) {
      callback(num);

      return this;
    },

    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
