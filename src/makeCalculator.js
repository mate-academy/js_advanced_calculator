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
      if (b === 0) {
        throw new Error('Division by zero');
      }

      return a / b;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, number) {
      if (typeof operation !== 'function') {
        throw new Error('Operation must be a function');
      }
      this.result = operation(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
