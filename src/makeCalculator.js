"use strict";

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (num) {
      this.result += num;
      return this;
    },

    subtract: function (num) {
      this.result -= num;
      return this;
    },

    multiply: function (num) {
      this.result *= num;
      return this;
    },

    divide: function (num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        console.error("Cannot divide by zero.");
      }
      return this;
    },

    reset: function () {
      this.result = 0;
      return this;
    },

    operate: function (callback, num) {
      return callback.call(this, num);
    },
  };
}

module.exports = makeCalculator;
