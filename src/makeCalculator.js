'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate: function(action, a) {
      return action.call(this, a);
    },

    add(a) {
      this.result += a;

      return this;
    },

    subtract(a) {
      this.result -= a;

      return this;
    },

    multiply(a) {
      this.result *= a;

      return this;
    },

    divide(a) {
      if (!a) {
        throw new Error('cannot be divided by zero');
      }
      this.result /= a;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

  };
}

module.exports = makeCalculator;
