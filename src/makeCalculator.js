'use strict';

function makeCalculator() {
  return {
    result: 0,

    add(value) {
      this.result = this.result + value;

      return this.result;
    },

    subtract(value) {
      this.result = this.result - value;

      return this.result;
    },

    multiply(value) {
      this.result = this.result * value;

      return this.result;
    },

    divide(value) {
      this.result = this.result / value;

      return this.result;
    },

    operate(back, value) {
      back.call(this, value);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
