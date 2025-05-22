'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,
  };

  const add = (num1, num2) => {
    return num1 + num2;
  };

  const subtract = (num1, num2) => {
    return num1 - num2;
  };

  const multiply = (num1, num2) => {
    return num1 * num2;
  };

  const divide = (num1, num2) => {
    return num1 / num2;
  };

  calc.add = add;

  calc.multiply = multiply;

  calc.subtract = subtract;

  calc.divide = divide;

  calc.operate = function (callback, number) {
    this.result = callback(this.result, number);

    return this;
  };

  calc.reset = function () {
    this.result = 0;

    return this;
  };

  return calc;
}

module.exports = makeCalculator;
