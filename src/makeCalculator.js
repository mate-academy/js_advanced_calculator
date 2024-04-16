'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(num) {
      return this.result + num;
    },
    subtract(num) {
      return this.result - num;
    },
    multiply(num) {
      return this.result * num;
    },
    divide(num) {
      return this.result / num;
    },
    reset(num) {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      this.result = callback.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
