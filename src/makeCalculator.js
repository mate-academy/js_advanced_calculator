'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, x) {
  // const res = 0;

  // a = x;

  const calculator = {
    add: (num) => {
      this.result += num;
    },
    subtract: (num) => {
      this.result -= num;
    },
    multiply: (num) => {
      this.result *= num;
    },
    divide: (num) => {
      if (num !== 0) {
        this.result /= num;
      } else {
      }
    },
    reset: () => (this.result = 0),
    operate: (oper, num) => (this.result += oper(num)),
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
