'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(operand) {
      this.result += operand;

      return this;
    },
    subtract(operand) {
      this.result -= operand;

      return this;
    },
    multiply(operand) {
      this.result *= operand;

      return this;
    },
    divide(operand) {
      if (operand !== 0) {
        this.result /= operand;
      }

      return this;
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
