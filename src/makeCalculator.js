'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    // початковий стан калькулятора
    result: 0,
    // callback, бере поточний результат, додає до нього число і повертає суму
    add(currentResult, num) {
      return currentResult + num;
    },

    subtract(currentResult, num) {
      return currentResult - num;
    },

    divide(currentResult, num) {
      return currentResult / num;
    },

    multiply(currentResult, num) {
      return currentResult * num;
    },

    // головна дія. Викликає callback, міняє result і повертає увесь об'єкт
    operate(callback, num) {
      this.result = callback(this.result, num);

      return this; // повертаємо об'єкт для ланцюжка
    },

    // метод скидання
    reset() {
      this.result = 0;

      return this; // повертаємо об'єкт для ланцюжка
    },
  };
}

module.exports = makeCalculator;
