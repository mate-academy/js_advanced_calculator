'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  return {
    result: 0,
    add: function (number) {
      this.result += number;

      return this;
    },
    subtract: function (number) {
      this.result = this.result - number;

      return this;
    },
    multiply: function (number) {
      this.result *= number;

      return this;
    },
    divide: function (number) {
      this.result = this.result / number;

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (callback, number) {
      (() => callback.call(this, number))();

      return this;
    },
  };
}

module.exports = makeCalculator;
