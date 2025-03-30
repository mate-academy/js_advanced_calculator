'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    operate(func, operand) {
      this.result = func(this.result, operand);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    result: 0,
  };
}

module.exports = makeCalculator;
