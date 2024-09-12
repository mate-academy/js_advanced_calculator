'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    add: (num) => (calculator.result += num),
    subtract: (num) => (calculator.result -= num),
    multiply: (num) => (calculator.result *= num),
    divide: (num) => (calculator.result /= num),
    reset() {
      calculator.result = 0;

      return calculator;
    },
    operate(operation, number) {
      calculator.result = operation(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
