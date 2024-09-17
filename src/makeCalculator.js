'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const methods = {
    result: 0,

    add: (number) => {
      methods.result += number;

      return methods;
    },

    subtract: (number) => {
      methods.result -= number;

      return methods;
    },

    multiply: (number) => {
      methods.result *= number;

      return methods;
    },

    divide: (number) => {
      if (number !== 0) {
        methods.result /= number;
      }
    },

    reset: () => {
      methods.result = 0;

      return methods;
    },

    operate: function(callback, number) {
      callback(number);

      return methods;
    },
  };

  return methods;
}

module.exports = makeCalculator;
