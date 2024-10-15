'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;

  calculator.operate = (callback, number) => {
    calculator.result = callback(number);

    return calculator;
  };

  calculator.add = (a) => calculator.result + a;

  calculator.subtract = (a) => calculator.result - a;

  calculator.multiply = (a) => calculator.result * a;

  calculator.divide = (a) => calculator.result / a;

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
