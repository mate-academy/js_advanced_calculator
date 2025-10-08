'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  // Define operation callbacks
  function add(x) {
    return result + x;
  }

  function subtract(x) {
    return result - x;
  }

  function multiply(x) {
    return result * x;
  }

  function divide(x) {
    if (x === 0) throw new Error("Cannot divide by zero");
    return result / x;
  }

  return {
    get result() {
      return result;
    },
    operate(callback, value) {
      result = callback(value);
      return this; // Enable chaining
    },
    reset() {
      result = 0;
      return this; // Enable chaining
    },
    add,
    subtract,
    multiply,
    divide
  };
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21)


calculator.reset()


calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.divide, 5)
  .operate(calculator.multiply, 7)



module.exports = makeCalculator;
