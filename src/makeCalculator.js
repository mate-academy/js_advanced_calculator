/* eslint-disable no-console */
'use strict';

/**
 * @return {object}
 */

// let result = 0;

function makeCalculator() {
  const obj = {
    result: 0,

    add(value) {
      let result = this.result;

      result += value;

      return result;
    },
    subtract(value) {
      let result = this.result;

      result -= value;

      return result;
    },
    multiply(value) {
      let result = this.result;

      result *= value;

      return result;
    },
    divide(value) {
      let result = this.result;

      result /= value;

      return result;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, value) {
      this.result = callback.bind(this)(value);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
