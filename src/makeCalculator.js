'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: (num) => (calculator.result += num),
    subtract: (num) => (calculator.result -= num),
    multiply: (num) => (calculator.result *= num),
    divide: (num) => {
      if (num === 0) {
        return;
      }
      calculator.result /= num;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operator, num) {
      operator(num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
