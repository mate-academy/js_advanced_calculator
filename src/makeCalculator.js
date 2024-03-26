'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    add: (value) => {
      return (obj.result += value);
    },

    subtract: (value) => {
      return (obj.result -= value);
    },

    multiply: (value) => {
      return (obj.result *= value);
    },

    divide: (value) => {
      return (obj.result /= value);
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
