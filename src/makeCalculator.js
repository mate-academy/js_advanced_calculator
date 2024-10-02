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
    reset: () => (calculator.result = 0),
    operate: (oper, a) => (calculator.result += oper(this.result)),
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
