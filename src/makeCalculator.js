'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
        // eslint-disable-next-line no-console
        console.log('Error');
      }
      this.result /= number;

      return this;
    },
    operate(callback, number) {
      callback.call(this, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
