'use strict';

/**
 * @return {object}
 */
function makeCalculator(operate, number) {
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
      if (number !== 0) {
        this.result /= num;
      }
    },
    reset: function (num) {
      this.result = 0;

      return this;
    },

    operate: function (callback, num) {
      callback.call(this, num);

      return this;
    },
  };
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21);

module.exports = makeCalculator;
