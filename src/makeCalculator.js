'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value) {
      return this.result + value;
    },

    subtract(value) {
      return this.result - value;
    },

    multiply(value) {
      return this.result * value;
    },

    divide(value) {
      return this.result / value;
    },

    operate(operation, value) {
      this.result = operation.call(this, value);

      return this; // permite encadeamento
    },

    reset() {
      this.result = 0;

      return this; // permite encadeamento
    },
  };
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
