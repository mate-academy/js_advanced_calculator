'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (callback, value) {
      this.result = callback.call(this, value);

      return this;
    },

    add: function (value) {
      return this.result + value;
    },

    subtract: function (value) {
      return this.result - value;
    },

    multiply: function (value) {
      return this.result * value;
    },

    divide: function (value) {
      return this.result / value;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
