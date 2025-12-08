'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;

  calculator.add = (operand) => {
    calculator.result += operand;

    return calculator;
  };

  calculator.subtract = (operand) => {
    calculator.result -= operand;

    return calculator;
  };

  calculator.multiply = (operand) => {
    calculator.result *= operand;

    return calculator;
  };

  calculator.divide = (operand) => {
    calculator.result /= operand;

    return calculator;
  };

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  calculator.operate = (callback, operand) => {
    callback(operand);

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
