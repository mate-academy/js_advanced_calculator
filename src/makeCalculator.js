'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  const calculator = {
    add: (num) => result + num,
    subtract: (num) => result - num,
    divide: (num) => result / num,
    multiply: (num) => result * num,
    operate: function (callback, num) {
      result = callback(num);

      return this;
    },
    reset: function () {
      result = 0;

      return this;
    },
    get result() {
      return result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
