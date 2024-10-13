'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value) {
      this.result += value;

      return this;
    },

    subtract(value) {
      this.result -= value;

      return this;
    },

    multiply(value) {
      this.result *= value;

      return this;
    },

    divide(value) {
      if (value !== 0) {
        this.result /= value;
      } else {
        throw new Error("Can't divide by 0!");
      }

      return this;
    },

    operate(operation, value) {
      if (typeof operation === 'function') {
        operation.call(this, value);

        return this;
      } else {
        throw new Error('Callback is not a function');
      }
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
