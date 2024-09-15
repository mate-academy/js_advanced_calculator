'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add: a => calculator.result + a,
    subtract: b => calculator.result - b,
    multiply: c => calculator.result * c,
    divide: d => calculator.result / d,
    reset: () => {
      calculator.result = 0;

      return calculator;
    },
    operate: (operations, number) => {
      calculator.result = operations(number);

      return calculator;
    },
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
