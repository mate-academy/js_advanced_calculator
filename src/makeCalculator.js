'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },

    add: (result, num) => result + num,

    subtract: (result, num = 0) => result - num,

    multiply: (result, num = 0) => result * num,

    divide: (result, num = 0) => result / num,

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
