'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
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

        return this;
      }
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate(operation, num) {
      if (operation === this.add) {
        return this.add(num);
      } else if (operation === this.subtract) {
        return this.subtract(num);
      } else if (operation === this.multiply) {
        return this.multiply(num);
      } else if (operation === this.divide) {
        return this.divide(num);
      }

      return this;
    },
  };
}

module.exports = makeCalculator;
