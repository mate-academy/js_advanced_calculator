'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add: (valueResult) => (value) => valueResult + value,
    subtract: (valueResult) => (value) => valueResult - value,
    multiply: (valueResult) => (value) => valueResult * value,
    divide: (valueResult) => (value) =>
      value === 0 ? 'Error' : valueResult / value,

    operate: function (callback, number) {
      this.result = callback(this.result)(number);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
