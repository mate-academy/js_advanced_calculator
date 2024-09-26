'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(command, number) {
      if (typeof command !== 'function' || typeof number !== 'number') {
        return;
      }

      command.call(this, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(number) {
      this.result += number;
    },

    subtract(number) {
      this.result -= number;
    },

    divide(number) {
      if (number === 0) {
        return;
      }

      this.result /= number;
    },

    multiply(number) {
      this.result *= number;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
