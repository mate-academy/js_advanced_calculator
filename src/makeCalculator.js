'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const INITIAL_VALUE = 0;

  const calculator = {
    result: INITIAL_VALUE,

    add(integer) {
      return this.result + integer;
    },

    subtract(integer) {
      return this.result - integer;
    },

    multiply(integer) {
      return this.result * integer;
    },

    divide(integer) {
      return this.result / integer;
    },

    reset(integer) {
      this.result = INITIAL_VALUE;

      return this;
    },

    operate(action, value) {
      this.result = action.call(this, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
