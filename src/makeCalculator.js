'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, value) {
      this.result = operation(this.result, value);

      return this;
    },
    add: (originalValue, value) => {
      return originalValue + value;
    },
    subtract: (originalValue, value) => {
      return originalValue - value;
    },
    multiply: (originalValue, value) => {
      return originalValue * value;
    },
    divide: (originalValue, value) => {
      return originalValue / value;
    },
  };
}

module.exports = makeCalculator;
