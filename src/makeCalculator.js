'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add: (value, prevResult) => prevResult + value,
    subtract: (value, prevResult) => prevResult - value,
    multiply: (value, prevResult) => prevResult * value,
    divide: (value, prevResult) => prevResult / value,
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      this.result = callback(value, this.result);

      return this;
    },
  };
}

module.exports = makeCalculator;
