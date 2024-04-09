'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
    add(operands) {
      return (calculator.result += operands);
      // return result;
    },
    subtract(operands) {
      return (calculator.result -= operands);
      // return result;
    },
    multiply(operands) {
      return (calculator.result *= operands);
      // return result;
    },
    divide(operands) {
      return (calculator.result /= operands);
      // return result;
    },
    operate(operator, operands) {
      calculator.result = operator(operands);

      return this;
    },
    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
