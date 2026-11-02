'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    divide(a, b) {
      return a / b;
    },
    multiply(a, b) {
      return a * b;
    },
    result: 0,
    operate(callback, value) {
      calc.result = callback(calc.result, value);

      return calc;
    },
    reset() {
      calc.result = 0;

      return calc;
    },
  };

  return calc;
}

module.exports = makeCalculator;
