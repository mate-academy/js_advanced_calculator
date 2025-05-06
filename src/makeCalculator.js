'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (x) {
      this.result += x;

      return this.result;
    },

    subtract: function (x) {
      this.result -= x;

      return this.result;
    },

    multiply: function (x) {
      this.result *= x;

      return this.result;
    },

    divide: function (x) {
      this.result /= x;

      return this.result;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, number) {
      operation.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
