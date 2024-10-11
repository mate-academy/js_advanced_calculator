'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const objectWithMethods = {
    // Basic math operations, it MIGHT BE done, but probably not.
    add: function (number) {
      this.result += number;
    },
    subtract: function (number) {
      this.result -= number;
    },
    multiply: function (number) {
      this.result *= number;
    },
    divide: function (number) {
      this.result /= number;
    },

    // SHOULD BE, done.
    reset: function () {
      this.result = 0;

      return this;
    },
    // MAYBE, done.
    operate: function (operation, number) {
      operation.call(this, number);

      return this;
    },

    // default.
    result: 0,
  };

  return objectWithMethods;
}

module.exports = makeCalculator;
