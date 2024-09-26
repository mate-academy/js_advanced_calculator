'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(number, result) {
      return (result + number);
    },

    subtract(number, result) {
      return (result - number);
    },

    multiply(number, result) {
      return (result * number);
    },

    divide(number, result) {
      return (result / number);
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(method, number) {
      this.result = method(number, this.result);

      return this;
    },
  };
}

module.exports = makeCalculator;
