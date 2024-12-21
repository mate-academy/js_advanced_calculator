'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculate = {
    result: 0,

    operate(action, value) {
      return action.call(this, value);
    },

    add(value = 0) {
      this.result += value;

      return this;
    },

    subtract(value = 0) {
      this.result -= value;

      return this;
    },

    multiply(value = 0) {
      this.result *= value;

      return this;
    },

    divide(value = 0) {
      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculate;
}

module.exports = makeCalculator;
