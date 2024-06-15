'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(operand) {
      this.result += operand;
    },

    subtract(operand) {
      this.result -= operand;
    },

    multiply(operand) {
      this.result *= operand;
    },

    divide(operand) {
      if (operand !== 0) {
        this.result /= operand;
      } else {
        return 'Error';
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
