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
      this.result = operation(this.result, number);

      return this;
    },

    add: (result, value) => result + value,
    subtract: (result, value) => result - value,
    multiply: (result, value) => result * value,
    divide: (result, value) => {
      if (value === 0) {
        throw new Error('You can not divide by 0!!!');
      }

      return result / value;
    },
  };
}

module.exports = makeCalculator;
