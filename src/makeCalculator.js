'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add(n) {
      calc.result += n;
    },
    subtract(n) {
      calc.result -= n;
    },
    multiply(n) {
      calc.result *= n;
    },
    divide(n) {
      calc.result /= n;
    },
    reset() {
      calc.result = 0;

      return calc;
    },
    operate(callback, number) {
      callback(number);

      return calc;
    },
  };

  return calc;
}

module.exports = makeCalculator;
