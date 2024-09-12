'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, num) {
      this.result = operation(num, this.result);

      return this;
    },
    add(num, prevValue) {
      return prevValue + num;
    },
    subtract(num, prevValue) {
      return prevValue - num;
    },
    multiply(num, prevValue) {
      return prevValue * num;
    },
    divide(num, prevValue) {
      return prevValue / num;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
