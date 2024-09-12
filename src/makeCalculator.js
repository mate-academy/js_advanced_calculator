'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,
  };

  function reset() {
    this.result = 0;

    return calculator;
  };
  calculator.reset = reset.bind(calculator);

  function add(number) {
    this.result += number;

    return this.result;
  };
  calculator.add = add.bind(calculator);

  function subtract(number) {
    this.result -= number;

    return this.result;
  };
  calculator.subtract = subtract.bind(calculator);

  function multiply(number) {
    this.result *= number;

    return this.result;
  };
  calculator.multiply = multiply.bind(calculator);

  function divide(number) {
    this.result /= number;

    return this.result;
  };
  calculator.divide = divide.bind(calculator);

  function operate(callback, number) {
    callback.call(this, number);

    return this;
  };
  calculator.operate = operate.bind(calculator);

  return calculator;
}

module.exports = makeCalculator;
