'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },

    operate(callback, number) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
      }
      this.result = callback(this.result, number);
      // calculator.result = callback(calculator.result, number);

      return this; // allows chaining
      // return calculator; // chainable
    },

    reset() {
      this.result = 0;
      // calculator.result = 0;

      return this; // allows chaining
      // return calculator; // chainable
    },
  };

  return calculator;
}
module.exports = makeCalculator;
