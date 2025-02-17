'use strict';

/**
 * @return {object}
 */

function makeCalculator() {
  return {
    result: 0,

    add: (direct, num) => (direct.result += num),

    subtract: (direct, num) => (direct.result -= num),

    multiply: (direct, num) => (direct.result *= num),

    divide: (direct, num) => (direct.result /= num),

    reset() {
      this.result = 0;

      return this;
    },

    operate(calcOperation, value) {
      calcOperation(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
