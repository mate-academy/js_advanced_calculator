'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const DEFAULT_VALUE = 0;

  const library = {
    result: DEFAULT_VALUE,
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
      this.result /= num;
    },
    reset: function () {
      this.result = DEFAULT_VALUE;

      return this;
    },
    operate: function (callback, num) {
      callback.call(this, num);

      return this;
    },
  };

  return library;
}

module.exports = makeCalculator;
