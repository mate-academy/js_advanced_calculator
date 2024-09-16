'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      return calculator.result + num;
    },

    subtract(num) {
      return calculator.result - num;
    },

    multiply(num) {
      return calculator.result * num;
    },

    divide(num) {
      if (num === 0) {
        return 'Can\'t devide by 0';
      }

      return calculator.result / num;
    },

    reset() {
      calculator.result = 0;

      return this;
    },

    operate(operation, num) {
      calculator.result = operation(num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
