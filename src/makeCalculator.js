'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    operate(operator, num) {
      calc.result = operator(num);

      return calc;
    },

    add(num) {
      calc.result += num;

      return calc.result;
    },
    subtract(num) {
      calc.result -= num;

      return calc.result;
    },
    divide(num) {
      calc.result /= num;

      return calc.result;
    },
    multiply(num) {
      calc.result *= num;

      return calc.result;
    },
    reset() {
      calc.result = 0;

      return calc;
    },
  };

  return calc;
}

module.exports = makeCalculator;
