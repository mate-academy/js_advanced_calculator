'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    get result() {
      return result;
    },

    add: (number) => {
      result += number;

      return this;
    },

    subtract: (number) => {
      result -= number;

      return this;
    },

    multiply: (number) => {
      result *= number;

      return this;
    },

    divide: (number) => {
      result /= number;

      return this;
    },

    reset: function () {
      result = 0;

      return this;
    },

    operate: function (callback, number) {
      callback(number);

      return this;
    },
  };
}

module.exports = makeCalculator;
