'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    total: 0,

    operate(callback, value) {
      callback.call(this, value);

      return calculator;
    },
    add(value) {
      this.total += value;

      return calculator;
    },
    reset() {
      this.total = 0;

      return calculator;
    },
    subtract(value) {
      this.total -= value;

      return calculator;
    },
    divide(value) {
      if (value === 0) {
        return 'Error - division by 0';
      }
      this.total /= value;

      return calculator;
    },
    multiply(value) {
      this.total *= value;

      return calculator;
    },
    get result() {
      return this.total;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
