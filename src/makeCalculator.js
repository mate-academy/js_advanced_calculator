'use strict';

/**
 * Создайте функцию `makeCalculator`, которая возвращает объект, который
 * имеет следующие поля:
 * - Методы: `сложение`,` вычитание`, `умножение`,` деление`, `сброс`,` работа`.
 * - Свойство `result` изначально равно 0.
 *
 * Как будет работать калькулятор:
 * - Каждый `операционный` вызов принимает номер, обратный вызов и
 * соответствующее действие с `результатом`.
 * - Метод `reset` сбрасывает значение` result` в 0.
 * - Методы `opera` и` reset` могут использоваться в цепочечных вызовах.
 *
 * Пример:
 * const calculator = makeCalculator ();
 *
 * calculator.operate (calculator.add, 21)
 * calculator.result === 21

 * calculator.reset()
 * calculator.result === 0

 * calculator
 *  .operate(calculator.add, 2)
 *  .operate(calculator.multiply, 4)
 *  .reset()
 *  .operate(calculator.subtract, 5)
 *  .operate(calculator.multiply, 4)
 *
 * calculator.result === -20
 *
 *
 * @return {object}
 */

function makeCalculator() {
  const calculatorObject = {
    add(value) {
      this.result += value;
    },
    subtract(value) {
      this.result -= value;
    },
    multiply(value) {
      this.result *= value;
    },
    devide(value) {
      this.result /= value;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, value) {
      operation.call(this, value);

      return this;
    },
    result: 0,
  };

  return calculatorObject;
}

module.exports = makeCalculator;
