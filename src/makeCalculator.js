'use strict';

function makeCalculator() {
  const operates = {

    resultMathOperations: 0,

    get result() {
      return this.resultMathOperations;
    },

    set changeResult(value) {
      this.resultMathOperations = value;
    },

    operate(operation, value) {
      this.changeResult = operation(this.resultMathOperations, value);

      return this;
    },

    add(prevValue, value) {
      const result = prevValue + value;

      return result;
    },

    subtract(prevValue, value) {
      const result = prevValue - value;

      return result;
    },

    multiply(prevValue, value) {
      const result = prevValue * value;

      return result;
    },

    divide(prevValue, value) {
      if (value === 0) {
        return 0;
      }

      const result = prevValue / value;

      return result;
    },

    reset() {
      this.changeResult = 0;

      return this;
    },
  };

  return operates;
}

module.exports = makeCalculator;
