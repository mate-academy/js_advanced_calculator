'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (value1, value2) => value1 + value2,
    subtract: (value1, value2) => value1 - value2,
    multiply: (value1, value2) => value1 * value2,
    divide: (value1, value2) => value1 / value2,

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
