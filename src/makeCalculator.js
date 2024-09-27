'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    digit: 0,

    add: (val) => {
      calc.digit += val;

      return this;
    },
    subtract: (val) => {
      calc.digit -= val;

      return this;
    },
    multiply: (val) => {
      calc.digit *= val;

      return this;
    },
    divide: (val) => {
      calc.digit /= val;

      return this;
    },

    reset() {
      calc.digit = 0;

      return this;
    },

    operate(callbackOperation, x) {
      callbackOperation(x);

      return this;
    },

    get result() {
      return calc.digit;
    },
  };

  return calc;
}

module.exports = makeCalculator;
