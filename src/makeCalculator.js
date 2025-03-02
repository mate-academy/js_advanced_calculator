'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate: function (callback, num) {
      if (typeof callback === 'function') {
        this.result = callback(this.result, num);

        return this;
      }

      throw new Error('Callback inválido. Deve ser uma função.');
    },
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,

    reset: function () {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
