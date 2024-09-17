'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculatorObj = {
    result: 0,
    operate(callBack, number) {
      this.result = callBack(this.result, number);

      return this;
    },
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculatorObj;
}

module.exports = makeCalculator;
