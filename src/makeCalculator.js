'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add: (num1, num2) => num1 + num2,

    subtract: (num1, num2) => num1 - num2,

    multiply: (num1, num2) => num1 * num2,

    divide: (num1, num2) =>
      num2 === 0
        ? new Error('Cannot be divided by zero')
        : num1 / num2,

    operate(operation, argument) {
      this.result = operation(this.result, argument);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
