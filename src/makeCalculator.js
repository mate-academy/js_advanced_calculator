'use strict';

function makeCalculator() {
  return {
    result: 0,

    add(value) {
      this.result += value;

      return this;
    },

    subtract(value) {
      this.result -= value;

      return this;
    },

    multiply(value) {
      this.result *= value;

      return this;
    },

    divide(value) {
      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
  };
}

const calculator = makeCalculator();

// Função auxiliar para imprimir sem usar console.log
function printResult(label, value) {
  process.stdout.write(`${label}: ${value}\n`);
}

calculator.operate(calculator.add, 21);
printResult('Resultado 1', calculator.result); // 21

calculator.reset();
printResult('Resultado 2', calculator.result); // 0

calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.multiply, 7)
  .operate(calculator.divide, 5);

printResult('Resultado final', calculator.result); // -28

module.exports = makeCalculator;
