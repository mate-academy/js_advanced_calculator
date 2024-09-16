'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, number) {
      const self = this;

      operation(number, self);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number, self) {
      self.result += number;
    },

    subtract(number, self) {
      self.result -= number;
    },

    multiply(number, self) {
      self.result *= number;
    },

    divide(number, self) {
      self.result /= number;
    },
  };
}

module.exports = makeCalculator;
