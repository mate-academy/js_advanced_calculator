'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(a) {
      return (b) => a + b;
    },
    subtract(a) {
      return (b) => a - b;
    },
    multiply(a) {
      return (b) => a * b;
    },
    divide(a) {
      return (b) => (b !== 0 ? a / b : 'Error: Division by zero');
    },

    operate(callback, number) {
      if (typeof callback !== 'function') {
        throw new Error('Invalid callback: must be a function');
      }
      this.result = callback(this.result)(number);
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

