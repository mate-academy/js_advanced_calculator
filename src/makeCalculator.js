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
function makeCalculator() {
  const allOperates = {

    // змінна в якій буде зберігатись результат
    resultOperation: 0,

    // геттер який повертає результат , тобто нашу змінну з результатом
    get result() {
      return this.resultOperation;
    },

    // геттер який повертає наш об'єкт,
    // для того щоб можна було використовувати чейнінг
    get thisObject() {
      return this;
    },

    /**
     * @param {number} number
     * сеттер - який буде змінювати нашу результуючу змінну
     */
    set changeResult(number) {
      this.resultOperation = number;
    },

    // дана функція приймає (callback) і число (number) - для маніпуляцій з ним
    operate(callback, number) {
      this.changeResult = callback(this.resultOperation, number);

      return this.thisObject;
    },

    // Функція додавання, яка прииймає початкове значення (а саме результат) та
    // число яке передається, та вертає результат 'додавання'
    add(startNumber, number) {
      const result = startNumber + number;

      return result;
    },

    subtract(startNumber, number) {
      const result = startNumber - number;

      return result;
    },

    multiply(startNumber, number) {
      const result = startNumber * number;

      return result;
    },

    divide(startNumber, number) {
      const result = startNumber / number;

      return result;
    },

    // метод reset - встановлює нашій змінній значення 0
    reset() {
      this.changeResult = 0;

      return this.thisObject;
    },
  };

  return allOperates;
}

module.exports = makeCalculator;
