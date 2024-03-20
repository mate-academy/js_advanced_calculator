'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(operation, value) {
      if (typeof (value) === 'number') {
        operation(value);

        return this;
      };

      throw new Error('Value is not a number!');
    },

    add(value) {
      calculator.result += value;
    },

    subtract(value) {
      calculator.result -= value;
    },

    multiply(value) {
      calculator.result *= value;
    },

    divide(value) {
      if (value === 0) {
        throw new Error('You cannot divide by zero!');
      }

      calculator.result /= value;
    },

    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
