'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: (num) => {
      return (calculator.result += num);
    },

    subtract: (num) => {
      return (calculator.result -= num);
    },

    multiply: (num) => {
      return (calculator.result *= num);
    },

    divide: function (num) {
      return (calculator.result /= num);
    },

    reset: () => {
      calculator.result = 0;

      return calculator;
    },

    operate: function (callback, num) {
      this.result = callback.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
