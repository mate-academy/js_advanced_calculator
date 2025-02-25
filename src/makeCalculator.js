'use strict';

function makeCalculator() {
  return {
    result: 0,

    operate(func, operand) {
      func.call(this, operand);

      return this;
    },

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
      }
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
