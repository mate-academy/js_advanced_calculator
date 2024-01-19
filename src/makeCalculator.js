'use strict';

/*
 * @return {object}
 */

function makeCalculator() {
  const operates = {

    // змінна в якій буде зберігатись результат
    resultMathOperations: 0,

    // геттер який повертає результат , тобто нашу змінну з результатом
    get result() {
      return this.resultMathOperations;
    },

    // сеттер - який буде змінювати нашу результуючу змінну
    set changeResult(value) {
      this.resultMathOperations = value;
    },

    // дана функція приймає (operation) і число (value) - для маніпуляцій з ним
    operate(operation, value) {
      this.changeResult = operation(this.resultMathOperations, value);

      return this;
    },

    // Функціі ... , які прииймають початкове(або попереднє) значення
    // (а саме результат) та число яке передається (value),
    // та вертає результат 'додавання та інші'
    add(prevValue, value) {
      const result = prevValue + value;

      return result;
    },

    subtract(prevValue, value) {
      const result = prevValue - value;

      return result;
    },

    multiply(prevValue, value) {
      const result = prevValue * value;

      return result;
    },

    divide(prevValue, value) {
      const result = prevValue / value;

      return result;
    },

    // метод reset - встановлює нашій змінній значення 0
    reset() {
      this.changeResult = 0;

      return this;
    },
  };

  return operates;
}

module.exports = makeCalculator;
