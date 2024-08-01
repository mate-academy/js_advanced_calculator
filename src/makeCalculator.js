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

    add: (number) => result + number,
    subtract: (number) => result - number,
    multiply: (number) => result * number,
    divide: (number) => {
      if (number === 0) {
        return 'Error';
      } else {
        return result / number;
      }
    },
    operate: function (callback, number) {
      result = callback(number);

      return this;
    },
    reset: function () {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
