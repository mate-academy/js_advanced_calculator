'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // Inicjalizacja obiektu kalkulatora
  let result = 0;

  // Funkcja 'operate' wykonuje operację na wyniku
  function operate(callback, num) {
    result = callback(result, num);

    return this; // Zwracamy obiekt, aby umożliwić łańcuchowanie
  }

  // Funkcja 'reset' ustawia wynik na 0
  function reset() {
    result = 0;

    return this; // Zwracamy obiekt, aby umożliwić łańcuchowanie
  }

  // Metody matematyczne
  function add(currentResult, num) {
    return currentResult + num;
  }

  function subtract(currentResult, num) {
    return currentResult - num;
  }

  function multiply(currentResult, num) {
    return currentResult * num;
  }

  function divide(currentResult, num) {
    if (num === 0) {
      throw new Error(`'Cannot divide by zero'`);
    }

    return currentResult / num;
  }

  // Zwracamy obiekt kalkulatora z metodami
  return {
    get result() {
      return result;
    },
    add,
    subtract,
    multiply,
    divide,
    operate,
    reset,
  };
}

module.exports = makeCalculator;
