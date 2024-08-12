'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculate = {
    result: 0,
    operate(operation, num) {
      operation(this, num);

      return this;
    },

    add(calc, num) {
      calc.result += num;

      return calc;
    },

    subtract(calc, num) {
      calc.result -= num;

      return calc;
    },

    multiply(calc, num) {
      calc.result *= num;

      return calc;
    },

    divide(calc, num) {
      calc.result /= num;

      return calc;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculate;
}

module.exports = makeCalculator;
