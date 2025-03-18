'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
  };

  calculator.add = (operand) => (calculator.result += operand);
  calculator.subtract = (operand) => (calculator.result -= operand);
  calculator.multiply = (operand) => (calculator.result *= operand);
  calculator.divide = (operand) => (calculator.result /= operand);

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  calculator.operate = (f, operand) => {
    f(operand);

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
