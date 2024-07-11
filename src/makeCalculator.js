'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (valueResult) {
      return function (value) {
        return valueResult + value;
      };
    },

    subtract: function (valueResult) {
      return function (value) {
        return valueResult - value;
      };
    },

    multiply: function (valueResult) {
      return function (value) {
        return valueResult * value;
      };
    },

    divide: function (valueResult) {
      return function (value) {
        if (value !== 0) {
          return valueResult / value;
        } else {
          return 'Error';
        }
      };
    },

    operate: function (callback, value) {
      this.result = callback(this.result)(value);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
