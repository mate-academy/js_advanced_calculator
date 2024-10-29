'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      callback.call(this, number);

      return this;
    },

    add(number) {
      return (this.result += number);
    },

    subtract(number) {
      this.result -= number;
    },

    multiply(number) {
      this.result *= number;
    },

    divide(number) {
      if (number === 0) {
        throw new Error('Cant divide by 0');
      }

      this.result /= number;
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
  .operate(calculator.divide, 2)
  .operate(calculator.multiply, 7);

module.exports = makeCalculator;
