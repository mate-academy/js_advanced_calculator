'use strict';

function makeCalculator() {
  let _result = 0; // Внутрішня змінна для зберігання поточного результату

  const calculator = {
    // Геттер для доступу до поточного результату
    get result() {
      return _result;
    },

    // Метод додавання: безпосередньо змінює _result і повертає this для ланцюга
    add: function (number) {
      _result += number;

      return this;
    },

    subtract: function (number) {
      _result -= number;

      return this;
    },

    // Метод множення: безпосередньо змінює _result і повертає this для ланцюга
    multiply: function (number) {
      _result *= number;

      return this;
    },

    // Метод ділення: безпосередньо змінює _result і повертає this для ланцюга
    divide: function (number) {
      if (number === 0) {
        _result = NaN; // Встановлюємо результат як NaN при діленні на нуль

        return this;
      }
      _result /= number;

      return this;
    },

    // Метод operate: приймає функцію (метод калькулятора) та число.
    // Він викликає наданий метод, передаючи йому число.
    // Оскільки методи add/subtract/etc. вже змінюють _result і повертають this,
    // operate просто викликає їх.
    operate: function (method, number) {
      // Викликаємо наданий метод, прив'язуючи його до поточного об'єкта 'this'
      // і передаючи 'number' як аргумент.
      method.call(this, number);

      return this; // Дозволяє ланцюгові виклики operate
    },

    // Метод reset: скидає _result до 0 і повертає this для ланцюга
    reset: function () {
      _result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
