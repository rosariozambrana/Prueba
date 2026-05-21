function sumar(a, b) {
  return a + b;
}

function calcularPromedio(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error('La lista de numeros no puede estar vacia');
  }

  const total = numeros.reduce((acumulado, valor) => acumulado + valor, 0);
  return total / numeros.length;
}

if (require.main === module) {
  const ejemplo = [10, 20, 30];
  console.log('Suma 2 + 3 =', sumar(2, 3));
  console.log('Promedio de', ejemplo, '=', calcularPromedio(ejemplo));
}

module.exports = {
  sumar,
  calcularPromedio,
};

