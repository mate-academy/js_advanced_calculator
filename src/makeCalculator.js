'use strict';

/**
 * @return {object}
 */

/**
  Exemplo:
const calculator = makeCalculator();

calculator.operate(calculator.add, 21)

console.log(calculator.result); // 21

calculator.reset()
console.log(calculator.result); // 0

calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.divide, 5)
  .operate(calculator.multiply, 7)

console.log(calculator.result); // -28
 */
function makeCalculator() {
  // write code here
  /** Crie uma makeCalculatorfunção que retorne um objeto com
  os seguintes campos:
    •	Métodos: add, subtract, multiply, divide, reset, operate.
    •	A resultpropriedade é inicialmente 0.
   */
  /**  Como a calculadora funcionará:
    •	Cada operatechamada recebe um retorno de chamada e um número
    e define o valor apropriado
    para a resultpropriedade.
    •	O resetmétodo redefine resulto valor para 0.
    •	add, subtract, multiply, divide são passados como callbacks
    para operate o método.
    •	Os métodos operate `and` reset podem ser chamados em cadeia.
   */
  let vlOperation = 0;

  const calc = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    reset: function () {
      vlOperation = 0;

      return this;
    },

    get result() {
      return vlOperation;
    },
    operate: function (operation, value) {
      vlOperation = operation(vlOperation, value);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
