'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {};

  calc.result = 0;

  calc.add = (a, b) => a + b;
  calc.subtract = (a, b) => a - b;
  calc.multiply = (a, b) => a * b;
  calc.divide = (a, b) => a / b;

  calc.reset = () => {
    calc.result = 0;

    return calc;
  };

  calc.operate = (callback, number) => {
    calc.result = callback(calc.result, number);

    return calc;
  };

  return calc;
}

module.exports = makeCalculator;
