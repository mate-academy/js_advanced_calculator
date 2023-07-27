/* eslint-disable no-console */
'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `result` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a callback and a number and sets the
 *   appropriate value to the `result` property.
 * - The `reset` method resets `result` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * Example:
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.result === 21

 * calculator.reset()
 * calculator.result === 0

 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * calculator.result === -28
 *
 *
 * @return {object}
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function makeCalculator() {
  const calculator = {
    result: 0,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    operate(operation, value) {
      if (typeof value !== 'number') {
        throw new Error('value must be a number');
      }
      this.result = operation(this.result, value);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    prompt() {
      rl.question(`Choose the operation (add, subtract, multiply, divide, quit): `,
        (operation) => {
          if (operation === 'quit') {
            console.log(`Final result is: ${this.result}`);
            rl.close();
          } else {
            rl.question('Choose the value: ', (value) => {
              switch (operation) {
                case 'add':
                  this.operate(this.add, Number(value));
                  break;
                case 'subtract':
                  this.operate(this.subtract, Number(value));
                  break;
                case 'multiply':
                  this.operate(this.multiply, Number(value));
                  break;
                case 'divide':
                  this.operate(this.divide, Number(value));
                  break;
                default:
                  console.log('Invalid operation');
              }
              console.log(`The result is: ${this.result}`);
              this.prompt();
            });
          }
        });
    },
  };

  return calculator;
}

const calculate = makeCalculator();

calculate.prompt();
module.exports = makeCalculator;
