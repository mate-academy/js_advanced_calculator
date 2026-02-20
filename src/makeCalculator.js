'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    _result: 0,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    get result() {
      return this._result;
    },

    reset() {
      this._result = 0;

      return this; // retorna o própri o obj para a corrente
    },

    operate(callback, x) {
      this._result = callback(this._result, x);

      return this; // retorna o própri o obj para a corrente
    },
  };

  return calculator;
}

module.exports = makeCalculator;
