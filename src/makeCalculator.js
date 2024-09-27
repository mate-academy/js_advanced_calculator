'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    add(num) {
      calc.result += num;

      return calc.result;
    },
    subtract(num) {
      calc.result -= num;

      return calc.result;
    },
    multiply(num) {
      calc.result *= num;

      return calc.result;
    },
    divide(num) {
      calc.result /= num;

      return calc.result;
    },
    reset() {
      calc.result = 0;

      return calc;
    },
    operate(operate, num) {
      operate(num);

      return calc;
    },
  };

  return calc;
}

module.exports = makeCalculator;
