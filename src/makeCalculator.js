'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(n) {
      return (this.result += n);
    },

    subtract(n) {
      if (n === 0) {
        return;
      }

      return (this.result -= n);
    },

    multiply(n) {
      return (this.result *= n);
    },

    divide(n) {
      return (this.result /= n);
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(fn, n) {
      fn.call(this, n);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
