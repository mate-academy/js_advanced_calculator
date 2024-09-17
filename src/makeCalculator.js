'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  /* The instructions speak of 'result property',
  yet the checklist says NOT to name it 'result'...
  That's the confusing part in my opinion */
  const calculator = {
    result: 0,

    operate(operation, number) {
      operation(number);

      return this;
    },

    add(number) {
      calculator.result += number;
    },

    subtract(number) {
      calculator.result -= number;
    },

    multiply(number) {
      calculator.result *= number;
    },

    divide(number) {
      calculator.result /= number;
    },

    reset() {
      calculator.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
