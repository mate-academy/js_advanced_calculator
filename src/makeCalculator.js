'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(previousNum, currentNum) {
      return previousNum + currentNum;
    },
    subtract(previousNum, currentNum) {
      return previousNum - currentNum;
    },
    multiply(previousNum, currentNum) {
      return previousNum * currentNum;
    },
    divide(previousNum, currentNum) {
      return previousNum / currentNum;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
