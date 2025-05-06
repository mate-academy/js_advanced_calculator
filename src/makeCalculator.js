'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callBack, operator) {
      callBack.call(this, operator);

      return this;
    },

    add(operator) {
      this.result += operator;

      return this;
    },

    subtract(operator) {
      this.result -= operator;

      return this;
    },

    multiply(operator) {
      this.result *= operator;

      return this;
    },

    divide(operator) {
      this.result /= operator;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
