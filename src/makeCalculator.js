'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value) {
      this.result += value;
    },

    subtract(value) {
      this.result -= value;
    },

    multiply(value) {
      this.result *= value;
    },

    divide(value) {
      if (value !== 0) {
        this.result /= value;
      }
    },

    operate(operation, value) {
      operation.bind(this)(value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21);

module.exports = makeCalculator;
