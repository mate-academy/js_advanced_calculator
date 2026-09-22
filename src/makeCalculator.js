'use strict';

/**
 * @return {object}
 */
const makeCalculator = () => {
  const calculator = {
    result: 0,

    operate(operation, value) {
      operation(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    add(object, value) {
      object.result = object.result + value;
    },

    subtract(object, value) {
      object.result = object.result - value;
    },

    divide(object, value) {
      object.result = object.result / value;
    },

    multiply(object, value) {
      object.result = object.result * value;
    },
  };

  return calculator;
};

module.exports = makeCalculator;
