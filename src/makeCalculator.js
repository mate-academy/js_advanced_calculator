'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    add(value) {
      obj.result += value;

      return this;
    },

    subtract(value) {
      obj.result -= value;

      return this;
    },

    multiply(value) {
      obj.result *= value;

      return this;
    },

    divide(value) {
      if (value !== 0) {
        obj.result /= value;

        return this;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, num) {
      operation.call(this, num);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
