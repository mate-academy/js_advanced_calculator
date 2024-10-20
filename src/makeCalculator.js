'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(number) {
      this.result += number;
    },
    subtract(number) {
      this.result -= number;
    },
    multiply(number) {
      this.result *= number;
    },
    divide(number) {
      if (number !== 0) {
        this.result /= number;
      } else {
        Error('Cannot divide by zero');
      }
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      if (typeof callback === 'function') {
        callback.call(this, number);
      } else {
        Error('Provided callback is not a function');
      }

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
