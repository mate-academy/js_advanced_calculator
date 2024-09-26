'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    add: addNumber,
    subtract: subtractNumber,
    multiply: multiplyNumber,
    divide: divideNumber,
    operate: callToAction,
    reset: resetResult,
    result: 0,
  };

  function callToAction(value, number) {
    switch (value) {
      case this.add:
        addNumber(number);

        return this;

      case this.subtract:
        subtractNumber(number);

        return this;

      case this.multiply:
        multiplyNumber(number);

        return this;

      case this.divide:
        divideNumber(number);

        return this;

      case this.reset:
        resetResult();
    }
  }

  function addNumber(number) {
    calculator.result += number;
  }

  function subtractNumber(number) {
    calculator.result -= number;
  }

  function multiplyNumber(number) {
    calculator.result *= number;
  }

  function divideNumber(number) {
    calculator.result /= number;
  }

  function resetResult() {
    calculator.result = 0;

    return this;
  }

  return calculator;
}

module.exports = makeCalculator;
