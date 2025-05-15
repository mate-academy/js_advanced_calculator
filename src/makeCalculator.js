'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    result,

    add: (num) => result + num,
    subtract: (num) => result - num,
    multiply: (num) => result * num,
    divide: (num) => result / num,

    operate(callback, num) {
      result = callback(num);
      this.result = result;

      return this;
    },

    reset() {
      result = 0;
      this.result = result;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
