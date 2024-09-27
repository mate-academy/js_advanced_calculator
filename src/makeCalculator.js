'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    add(a) {
      calc.result += a;

      return calc.result;
    },
    subtract(a) {
      calc.result -= a;

      return calc.result;
    },
    multiply(a) {
      calc.result *= a;

      return calc.result;
    },
    divide(a) {
      calc.result /= a;

      return calc.result;
    },
    reset() {
      calc.result = 0;

      return calc;
    },
    operate(callback, number) {
      calc.result = callback(number);

      return calc;
    },
  };

  return calc;
}

module.exports = makeCalculator;
