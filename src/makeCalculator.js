'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(num) {
      return this.result + num;
    },

    subtract(num) {
      return this.result - num;
    },

    multiply(num) {
      return this.result * num;
    },

    divide(num) {
      if (num === 0) {
        return this.result;
      }

      return this.result / num;
    },

    operate(operation, num) {
      this.result = operation.call(this, num);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
