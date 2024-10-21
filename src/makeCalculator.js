'use strict';

/**
 * @return {object}
 */

module.exports = makeCalculator;

function makeCalculator() {
  let result = 0;

  return {
    get result() {
      return result;
    },
    add: (num) => (result += num),
    subtract: (num) => (result -= num),
    multiply: (num) => (result *= num),
    divide: (num) => (result /= num),
    reset: function () {
      result = 0;

      return this;
    },
    operate: function (callback, num) {
      callback(num);

      return this;
    },
  };
}
