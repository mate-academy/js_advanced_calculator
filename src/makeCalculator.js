'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      return (this.result += number);
    },

    subtract(number) {
      return (this.result -= number);
    },

    multiply(number) {
      return (this.result *= number);
    },

    divide(number) {
      return (this.result /= number);
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      this.result = operation.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
