/* eslint-disable no-unused-vars */
'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add: function (value) {
      this.result += value;
    },
    subtract: function (value) {
      this.result -= value;
    },
    multiply: function (value) {
      this.result *= value;
    },
    divide: function (value) {
      if (value !== 0) {
        this.result /= value;
      }
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (callback, value) {
      callback.call(this, value);

      return this;
    },
  };
}

module.exports = makeCalculator;
