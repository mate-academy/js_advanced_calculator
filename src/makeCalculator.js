'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calc = {
    add: function(number) {
      result += number;

      return this;
    },

    subtract: function(number) {
      result -= number;

      return this;
    },

    multiply: function(number) {
      result *= number;

      return this;
    },

    divide: function(number) {
      result /= number;

      return this;
    },

    reset: function(number) {
      result = 0;

      return this;
    },

    operate: function(callback, number) {
      callback(number);

      return this;
    },

    get result() {
      return result;
    },
  };

  return calc;
}

module.exports = makeCalculator;
