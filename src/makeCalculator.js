'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    add(number) {
      return (calc.result + number);
    },
    subtract(number) {
      return (calc.result - number);
    },
    multiply(number) {
      return (calc.result * number);
    },
    divide(number) {
      return (calc.result / number);
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(func, number) {
      this.result = func(number);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
