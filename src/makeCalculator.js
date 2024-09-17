'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const resultObj = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, number) {
      this.result = method(number, this.result);

      return this;
    },

    add(number, result) {
      return number + result;
    },
    subtract(number, result) {
      return result - number;
    },
    multiply(number, result) {
      return result * number;
    },
    divide(number, result) {
      return result / number;
    },
  };

  return resultObj;
}

module.exports = makeCalculator;
