'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;

  calculator.add = (a) => (calculator.result += a);

  calculator.subtract = (a) => (calculator.result -= a);

  calculator.divide = (a) => (calculator.result /= a);

  calculator.multiply = (a) => (calculator.result *= a);

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  calculator.operate = (callback, a) => {
    callback(a);

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
