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
    operate(action, number) {
      action.call(this, number);

      return this;
    },
    add(num) {
      this.result += num;
    },
    subtract(num) {
      this.result -= num;
    },
    multiply(num) {
      this.result *= num;
    },
    divide(num) {
      if (num === 0) {
        throw new Error('Cannot be divided by 0!');
      }

      this.result /= num;
    },
  };
}

module.exports = makeCalculator;
