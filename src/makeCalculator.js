'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(fun, num) {
      if (typeof fun !== 'function') {
        throw new Error('The first argument "fun" must be a function.');
      }
      fun.call(this, num);

      return this;
    },
    reset() {
      this.result = 0;

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
      this.result /= num;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
