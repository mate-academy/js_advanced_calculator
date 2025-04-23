'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let state = 0;

  return {
    get result() {
      return state;
    },

    add(value) {
      state += value;
    },
    subtract(value) {
      state -= value;
    },
    divide(value) {
      state /= value;
    },
    multiply(value) {
      state *= value;

      return this;
    },
    reset() {
      state = 0;

      return this;
    },
    operate(callback, value) {
      callback(value);

      return this;
    },
  };
}

module.exports = makeCalculator;
