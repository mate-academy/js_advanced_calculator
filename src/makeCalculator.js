'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  const calculator = {
    result: 0,
    add(value) {
      calculator.result += value;

      return calculator;
    },
    subtract(value) {
      calculator.result -= value;

      return calculator;
    },
    multiply(value) {
      calculator.result *= value;

      return calculator;
    },
    divide(value) {
      if (value !== 0) {
        calculator.result /= value;
      } else {
        throw new Error('Cannot divide by zero');
      }

      return calculator;
    },
    reset() {
      calculator.result = 0;

      return calculator;
    },
    operate(fn, value) {
      fn.call(calculator, value);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
