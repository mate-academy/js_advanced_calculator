'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      this.result = operation.call(this, number);

      return this;
    },

    add(value) {
      return this.result + value;
    },

    subtract(value) {
      return this.result - value;
    },

    multiply(value) {
      return this.result * value;
    },

    divide(value) {
      if (value === 0) {
        throw new Error('You can not divide by 0!!!');
      }

      return this.result / value;
    },
  };
}

module.exports = makeCalculator;
