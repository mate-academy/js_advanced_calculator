"use strict";

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    // Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`
    result: 0,

    operate(callback, arg) {
      callback(arg, this);

      return this;
    },

    add(arg, obj) {
      obj.result += arg;
    },

    subtract(arg, obj) {
      obj.result -= arg;
    },

    multiply(arg, obj) {
      obj.result *= arg;
    },

    divide(arg, obj) {
      obj.result /= arg;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
