'use strict';

function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    add(operand, number) {
      const result = operand + number;

      return result;
    },

    subtract(operand, number) {
      const result = operand - number;

      return result;
    },

    multiply(operand, number) {
      const result = operand * number;

      return result;
    },

    divide(operand, number) {
      const result = operand / number;

      return result;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21);

calculator.reset();

calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.divide, 5)
  .operate(calculator.multiply, 7);

module.exports = makeCalculator;
