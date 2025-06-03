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
      return a / b;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, argument) {
      this.result = operation(this.result, argument);

      return this;
    },
  };
}

module.exports = makeCalculator;
