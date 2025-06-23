'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    add: function (a) {
      return this.result + a;
    },
    subtract: function (a) {
      return this.result - a;
    },
    multiply: function (a) {
      return this.result * a;
    },
    divide: function (a) {
      return this.result / a;
    },
    operate: function (operation, number) {
      this.result = operation.call(this, number);

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
