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
    },
    subtract(operands) {
      return (calculator.result -= operands);
    },
    multiply(operands) {
      return (calculator.result *= operands);
    },
    divide(operands) {
      return (calculator.result /= operands);
    },
    operate(operator, operands) {
      this.result = operator(operands);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
