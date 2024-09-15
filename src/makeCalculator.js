'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (acc, arg) => {
      return acc + arg;
    },
    subtract: (acc, arg) => {
      return acc - arg;
    },
    multiply: (acc, arg) => {
      return acc * arg;
    },
    divide: (acc, arg) => {
      return acc / arg;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, arg) {
      this.result = callback(this.result, arg);

      return this;
    },
  };
}

module.exports = makeCalculator;
