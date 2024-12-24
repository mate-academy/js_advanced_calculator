'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (num) {
      this.result += num;
    },

    subtract: function (num) {
      this.result -= num;
    },

    multiply: function (num) {
      this.result *= num;
    },

    divide: function (num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        return 'Error';
      }
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, value) {
      operation.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
