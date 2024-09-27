"use strict";

/**
 * @return {object}
 */
function makeCalculator(calculator) {
  const calc = {
    result: 0,

    add(num) {
      calc.result += num;
    },
    subtract(num) {
      calc.result -= num;
    },
    divide(num) {
      if (num !== 0) {
        calc.result /= num;
      }
    },
    multiply(num) {
      calc.result *= num;
    },
    reset() {
      calc.result = 0;

      return this;
    },
    operate(callAction, num) {
      callAction(num);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
