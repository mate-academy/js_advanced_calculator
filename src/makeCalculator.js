'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calc = {
    balance: 0,

    operate(f, value) {
      f(value);

      return this;
    },

    add(value) {
      calc.balance += value;
    },

    subtract(value) {
      calc.balance -= value;
    },

    divide(value) {
      calc.balance /= value;
    },

    multiply(value) {
      calc.balance *= value;
    },

    get result() {
      return calc.balance;
    },

    reset() {
      calc.balance = 0;

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
