'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    add(number) {
      calc.result += number;
    },
    subtract(number) {
      calc.result -= number;
    },
    divide(number) {
      calc.result /= number;
    },
    multiply(number) {
      calc.result *= number;
    },
    reset() {
      calc.result = 0;

      return this;
    },
    operate(operation, number) {
      operation(number);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
