'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(digit) {
      return (this.result += digit);
    },
    subtract(digit) {
      return (this.result -= digit);
    },
    multiply(digit) {
      return (this.result *= digit);
    },
    divide(digit) {
      return (this.result /= digit);
    },

    operate(callback, number) {
      this.result = callback(number);

      return this;
    },

    reset() {
      this.result = 0;
    },
  };
}

module.exports = makeCalculator;
