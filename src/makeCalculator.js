'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: function (currentValue, num) {
      return currentValue + num;
    },

    subtract: function (currentValue, num) {
      return currentValue - num;
    },

    multiply: function (currentValue, num) {
      return currentValue * num;
    },

    divide: function (currentValue, num) {
      return currentValue / num;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
