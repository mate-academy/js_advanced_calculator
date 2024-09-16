'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    operate(callback, num) {
      callback(num);

      return calc;
    },
    add(num) {
      calc.result += num;
    },
    subtract(num) {
      calc.result -= num;
    },
    multiply(num) {
      calc.result *= num;
    },
    divide(num) {
      calc.result /= num;
    },
    reset() {
      calc.result = 0;

      return calc;
    },
  };

  return calc;
}

module.exports = makeCalculator;
