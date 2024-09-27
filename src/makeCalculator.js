'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calcObj = {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    subtract(result, number) {
      return result - number;
    },

    divide(result, number) {
      return result / number;
    },

    multiply(result, number) {
      return result * number;
    },

    add(result, number) {
      return result + number;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calcObj;
}

module.exports = makeCalculator;
