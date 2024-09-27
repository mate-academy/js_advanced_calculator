'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  function add(num) {
    result += num;
  }

  function subtract(num) {
    result -= num;
  }

  function multiply(num) {
    result *= num;
  }

  function divide(num) {
    result /= num;
  }

  function reset() {
    result = 0;

    return this; // дозволяємо використовувати методи в ланцюжку
  }

  function operate(callback, num) {
    callback(num);

    return this; // дозволяємо використовувати методи в ланцюжку
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    reset,
    operate,
    get result() {
      return result;
    },
  };
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21);
// console.log(calculator.result); // 21

calculator.reset();
// console.log(calculator.result); // 0

calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.divide, 5)
  .operate(calculator.multiply, 7);

// console.log(calculator.result); // -28

module.exports = makeCalculator;
