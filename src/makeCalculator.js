'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (current, value) {
      return current + value;
    },
    subtract: function (current, value) {
      return current - value;
    },
    multiply: function (current, value) {
      return current * value;
    },
    divide: function (current, value) {
      return current / value;
    },

    operate: function (operation, value) {
      if (typeof operation === 'function') {
        this.result = operation(this.result, value);
      }

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
