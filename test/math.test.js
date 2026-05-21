const assert = require('node:assert/strict');
const { sumar, calcularPromedio } = require('../src/math');

function runTest(nombre, fn) {
  try {
    fn();
    console.log(`✓ ${nombre}`);
  } catch (error) {
    console.error(`✗ ${nombre}`);
    throw error;
  }
}

runTest('suma correctamente dos numeros', () => {
  assert.equal(sumar(2, 3), 5);
});

runTest('suma correctamente valores negativos', () => {
  assert.equal(sumar(-4, 1), -3);
});

runTest('calcula el promedio de una lista', () => {
  assert.equal(calcularPromedio([10, 20, 30]), 20);
});

runTest('lanza error si la lista esta vacia', () => {
  assert.throws(() => calcularPromedio([]), /no puede estar vacia/);
});

console.log('Todas las pruebas pasaron.');

