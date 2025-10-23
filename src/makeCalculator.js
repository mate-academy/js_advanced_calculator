'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    _result: 0,

    get result() {
      return this._result;
    },

    add(number) {
      return this._result + number;
    },

    subtract(number) {
      return this._result - number;
    },

    multiply(number) {
      return this._result * number;
    },

    divide(number) {
      return this._result / number;
    },

    operate(action, number) {
      this._result = action.call(this, number);

      return this;
    },

    reset() {
      this._result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
