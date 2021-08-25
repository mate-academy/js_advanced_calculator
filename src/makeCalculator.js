'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,
    add: function(y) {
      this.result = this.result + y;
    },
    subtract: function(y) {
      this.result = this.result - y;
    },
    multiply: function(y) {
      this.result = this.result * y;
    },
    divide: function(y) {
      this.result = this.result / y;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(x, y) {
      if (x === calculator.add) {
        this.add(y);

        return this;
      };

      if (x === calculator.subtract) {
        this.subtract(y);

        return this;
      };

      if (x === calculator.multiply) {
        this.multiply(y);

        return this;
      };

      if (x === calculator.divide) {
        this.divide(y);

        return this;
      };

      if (x === calculator.reset) {
        this.reset(y);
      };
    },
  };

  return calculator;
};

module.exports = makeCalculator;
