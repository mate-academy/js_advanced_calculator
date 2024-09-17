'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
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
      if (value === 0) {
        throw new Error('Dividing by 0 is not permitted!');
      }

      this.result /= value;

      return this;
    },
    validateValue(value) {
      return typeof value === 'number' && !isNaN(value);
    },
    validateOperation(operation) {
      return typeof operation === 'function';
    },
    reset() {
      if (!this.validateOperation(this.reset)) {
        throw new Error('Invalid operation!');
      }

      this.result = 0;

      return this;
    },
    operate(operation, value) {
      if (!this.validateOperation(operation)) {
        throw new Error('Invalid operation!');
      }

      if (!this.validateValue(value)) {
        throw new Error('Invalid value!');
      }

      return operation.call(this, value);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
