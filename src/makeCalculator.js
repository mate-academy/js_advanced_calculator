'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
    add: (n) => (calc.result += n),
    subtract: (n) => (calc.result -= n),
    multiply: (n) => (calc.result *= n),
    divide: (n) => (calc.result /= n),

    operate: function (callback, number) {
      callback(number);

      return this;
    },

    reset: () => {
      calc.result = 0;

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
