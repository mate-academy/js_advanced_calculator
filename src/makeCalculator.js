'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(firstNum, secondNum) {
      return firstNum + secondNum;
    },
    subtract(firstNum, secondNum) {
      return firstNum - secondNum;
    },
    multiply(firstNum, secondNum) {
      return firstNum * secondNum;
    },
    divide(firstNum, secondNum) {
      return firstNum / secondNum;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
