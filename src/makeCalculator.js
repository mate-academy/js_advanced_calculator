'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculated = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
    result: 0,
  };

  return calculated;
}

module.exports = makeCalculator;
