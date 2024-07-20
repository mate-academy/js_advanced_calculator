'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: function (value) {
      this.result += value;

      return this;
    },

    subtract: function (value) {
      this.result -= value;

      return this;
    },

    multiply: function (value) {
      this.result *= value;

      return this;
    },

    divide: function (value) {
      this.result /= value;

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, value) {
      return operation.call(this, value);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
