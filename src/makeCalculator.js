'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculatorObj = {
    result: 0,

    add(currentRes, number) {
      return currentRes + number;
    },

    subtract(currentRes, number) {
      return currentRes - number;
    },

    multiply(currentRes, number) {
      return currentRes * number;
    },

    divide(currentRes, number) {
      return currentRes / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
  };

  return calculatorObj;
}

module.exports = makeCalculator;
