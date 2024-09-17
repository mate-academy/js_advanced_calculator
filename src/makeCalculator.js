'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    add: (result, value) => result + value,
    subtract: (result, value) => result - value,
    multiply: (result, value) => result * value,
    divide: (result, value) => {
      if (value === 0) {
        throw new Error('You can not divide by 0!');
      }

      return result / value;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
