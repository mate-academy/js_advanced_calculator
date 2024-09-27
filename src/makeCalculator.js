'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const RESET_DEFAULT_VALUE = 0;

  const calculator = {
    result: 0,

    operate(actionCallback, value) {
      if (typeof value === 'number') {
        actionCallback(value, this);

        return this;
      }

      throw Error;
    },

    add(value, obj = this) {
      obj.result += value;
    },

    subtract(value, obj = this) {
      obj.result -= value;
    },

    divide(value, obj = this) {
      if (value !== 0) {
        obj.result /= value;

        return;
      }

      throw Error;
    },

    multiply(value, obj = this) {
      obj.result *= value;
    },

    reset() {
      this.result = RESET_DEFAULT_VALUE;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
