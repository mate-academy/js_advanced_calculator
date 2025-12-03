'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(number) {
      this.result += number;

      return this;
    },

    subtract(number) {
      this.result -= number;

      return this;
    },

    multiply(number) {
      this.result *= number;

      return this;
    },

    divide(number) {
      if (number === 0) {
        throw new Error('Division by zero');
      }

      this.result /= number;

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
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21);

module.exports = makeCalculator;
