'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (currentResult) => (value) => currentResult + value,

    subtract: (currentResult) => (value) => currentResult - value,

    multiply: (currentResult) => (value) => currentResult * value,

    divide: (valueResult) => (value) => {
      return value === 0 ? 'Error' : valueResult / value;
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
