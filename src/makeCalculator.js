'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

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
      return pastNum / num;
    },

    operate(callback, num) {
      this.result = callback(num, this.result);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
