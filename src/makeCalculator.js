'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculatorObject = {
    result: 0,

    add(param) {
      calculatorObject.result += param;
    },

    subtract(param) {
      calculatorObject.result -= param;
    },

    multiply(param) {
      calculatorObject.result *= param;
    },

    divide(param) {
      if (param === 0) {
        calculatorObject.result = Infinity;
      } else {
        calculatorObject.result /= param;
      }
    },

    reset() {
      calculatorObject.result = 0;

      return this;
    },

    operate(callback, num) {
      callback(num);

      return this;
    },

  };

  return calculatorObject;
}

module.exports = makeCalculator;
