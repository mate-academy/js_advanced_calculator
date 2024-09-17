'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (a, b) {
      return a + b;
    },

    subtract: function (a, b) {
      return a - b;
    },

    multiply: function (a, b) {
      return a * b;
    },

    divide: function (a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error('Division by zero is not allowed.');
      }
    },

    operate: function (operation, value) {
      this.result = operation(this.result, value);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
