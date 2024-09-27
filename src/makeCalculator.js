'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    add: (num) => result += num,
    subtract: (num) => result -= num,
    multiply: (num) => result *= num,
    divide: (num) => result /= num,
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
    }
  };

  return calculator;
}

module.exports = makeCalculator;
