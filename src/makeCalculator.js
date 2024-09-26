/* eslint-disable no-console */
'use strict';

/**
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
