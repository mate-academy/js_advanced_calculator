'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    add: (num) => result + num,
    subtract: (num) => result - num,
    multiply: (num) => result * num,
    divide: (num) => (num === 0 ? result : result / num),

    operate(callback, num) {
      result = callback(num);

      return this;
    },

    reset() {
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
