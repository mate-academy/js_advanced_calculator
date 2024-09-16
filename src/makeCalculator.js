'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      this.result = callback(number, this.result);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(num, pastNum) {
      return pastNum + num;
    },

    subtract(num, pastNum) {
      return pastNum - num;
    },

    multiply(num, pastNum) {
      return pastNum * num;
    },

    divide(num, pastNum) {
      if (num !== 0) {
        return pastNum / num;
      }

      return pastNum;
    },
  };
}

module.exports = makeCalculator;
