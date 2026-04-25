'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    add(a) {
      this.result += a;

      return this;
    },
    subtract(a) {
      this.result -= a;

      return this;
    },
    multiply(a) {
      this.result *= a;

      return this;
    },
    divide(a) {
      this.result /= a;

      return this;
    },
    operate: function (operation, number) {
      operation.call(this, number);

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    result: 0,
  };

  return calc;
}

module.exports = makeCalculator;
