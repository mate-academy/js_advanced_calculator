'use strict';

function makeCalculator() {
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
      if (value === 0) {
        throw new Error('Nie można dzielić przez zero!');
      }
      this.result /= value;
    },

    reset() {
      this.result = 0;
      return this; // pozwala na chainowanie
    },

    operate(callback, value) {
      callback.call(this, value);
      return this; // pozwala na chainowanie
    }
  };
}

