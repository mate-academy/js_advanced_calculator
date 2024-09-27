'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(prevNum, num) {
      return prevNum + num;
    },

    subtract(prevNum, num) {
      return prevNum - num;
    },

    multiply(prevNum, num) {
      return prevNum * num;
    },

    divide(prevNum, num) {
      return prevNum / num;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      const operation = this.result;

      this.result = callback(operation, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
