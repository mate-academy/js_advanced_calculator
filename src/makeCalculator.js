'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    multiply(value) {
      this.result *= value;
    },
    divide(value) {
      this.result /= value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, num) {
      /* eslint no-console: ["error", { allow: ["warn", "log"] }] */
      console.log(this.result, callback, num);

      const func = callback.bind(this);

      func(num);

      return this;
    },
  };
}

module.exports = makeCalculator;
