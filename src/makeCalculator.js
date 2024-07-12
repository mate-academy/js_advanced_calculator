'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      return callback.call(this, value);
    },
    add(value) {
      this.result += value;

      return this;
    },
    subtract(value) {
      this.result -= value;

      return this;
    },
    multiply(value) {
      this.result *= value;

      return this;
    },
    divide(value) {
      this.result /= value;

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}

// One more variant
/*
function makeCalculator() {
  return {
    result: 0,
    operate(callback, value) {
      return callback(this, value);
    },
    add(obj, value) {
      obj.result += value;

      return obj;
    },
    subtract(obj, value) {
      obj.result -= value;

      return obj;
    },
    multiply(obj, value) {
      obj.result *= value;

      return obj;
    },
    divide(obj, value) {
      obj.result /= value;

      return obj;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };
}
*/

module.exports = makeCalculator;
