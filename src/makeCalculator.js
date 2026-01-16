'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(value) {
      this.result += value;

      return this.result;
    },

    subtract(value) {
      this.result -= value;

      return this.result;
    },

    multiply(value) {
      this.result *= value;

      return this.result;
    },

    divide(value) {
      this.result /= value;

      return this.result;
    },

    operate(operation, value) {
      operation.call(this, value);

      return this; // permite encadeamento
    },

    reset() {
      this.result = 0;

      return this; // permite encadeamento
    },
  };

  return calculator;
}

// function makeCalculator() {
//   let result = 0;

//   const add = (value) => result + value;
//   const subtract = (value) => result - value;
//   const multiply = (value) => result * value;
//   const divide = (value) => result / value;

//   const calculator = {
//     get result() {
//       return result;
//     },

//     operate(operation, value) {
//       result = operation(value);

//       return calculator;
//     },

//     reset() {
//       result = 0;

//       return calculator;
//     },

//     add,
//     subtract,
//     multiply,
//     divide,
//   };

//   return calculator;
// }

// const calculator = makeCalculator();

// calculator.operate(calculator.add, 21);
// console.log(calculator.result); // 21

// calculator.reset();
// console.log(calculator.result); // 0

// calculator
//   .operate(calculator.add, 10)
//   .reset()
//   .operate(calculator.subtract, 20)
//   .operate(calculator.divide, 5)
//   .operate(calculator.multiply, 7);

// console.log(calculator.result); // -28

module.exports = makeCalculator;
