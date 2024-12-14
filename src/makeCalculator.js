'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(number) {
      this.result += number;

      return this;
    },
    subtract(number) {
      this.result -= number;

      return this;
    },
    multiply(number) {
      this.result = this.result * number;

      return this;
    },
    divide(number) {
      this.result = this.result / number;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },

    operate(action, number) {
      action.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
