'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const object = {

    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    add(result, number) {
      return result + number;
    },

    subtract(result, number) {
      return result - number;
    },

    multiply(result, number) {
      return result * number;
    },

    divide(result, number) {
      return result / number;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return object;
}

module.exports = makeCalculator;
