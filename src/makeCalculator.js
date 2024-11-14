'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;
  calculator.add = (number) => (calculator.result += number);
  calculator.subtract = (number) => (calculator.result -= number);
  calculator.multiply = (number) => (calculator.result *= number);
  calculator.divide = (number) => (calculator.result /= number);

  calculator.operate = (modification, number) => {
    modification(number);

    return calculator;
  };

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
