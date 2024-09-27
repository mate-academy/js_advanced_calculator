'use strict';

/**
 * @return {object}
 */
function makeCalculator(operate) {
  const obj = {
    result: 0,

    reset: function() {
      this.result = 0;

      return this;
    },

    operate: function(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    add: function(currentResult, number) {
      return currentResult + number;
    },

    subtract: function(currentResult, number) {
      return currentResult - number;
    },

    multiply: function(currentResult, number) {
      return currentResult * number;
    },

    divide: function(currentResult, number) {
      if (number === 0) {
        return 'cannot be divided by zero';
      }

      return currentResult / number;
    },
  };

  return obj;
}

module.exports = makeCalculator;
