'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(current, numb) {
      return current + numb;
    },
    subtract(current, numb) {
      return current - numb;
    },
    multiply(current, numb) {
      return current * numb;
    },
    divide(current, numb) {
      return current / numb;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, numb) {
      const current = this.result;
      const newValue = operation(current, numb);

      this.result = newValue;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
