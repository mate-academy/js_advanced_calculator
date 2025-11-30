'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const methods = {
    result: 0,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };

  return methods;
}

module.exports = makeCalculator;
