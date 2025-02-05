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

    add: (num) => {
      result += num;

      return this;
    },
    subtract: (num) => {
      result -= num;

      return this;
    },
    multiply: (num) => {
      result *= num;

      return this;
    },
    divide: (num) => {
      if (num !== 0) {
        result /= num;
      }

      return this;
    },
    reset: function () {
      result = 0;

      return this;
    },
    operate: function (operation, num) {
      operation(num);

      return this;
    },
  };
}

module.exports = makeCalculator;
