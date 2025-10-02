'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(numb) {
      this.result += numb;

      return this;
    },
    subtract(numb) {
      this.result -= numb;

      return this;
    },
    multiply(numb) {
      this.result *= numb;

      return this;
    },
    divide(numb) {
      this.result /= numb;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      callback.call(this, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
