'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
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
        return 'Невизначено';
      }
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, number) {
      // operation=callback
      operation.call(this, number);

      return this; //
    },
  };

  return calculator;
}

module.exports = makeCalculator;
