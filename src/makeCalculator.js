'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const listOfOperations = {
    result: 0,

    add(a, count) {
      return count + a;
    },

    subtract(a, count) {
      return count - a;
    },

    divide(a, count) {
      return count / a;
    },

    multiply(a, count) {
      return count * a;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, amount) {
      this.result = callback(amount, this.result);

      return this;
    },
  };

  return listOfOperations;
}

module.exports = makeCalculator;
