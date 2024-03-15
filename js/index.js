// Se espera a que el DOM esté completamente cargado para ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
  // Se crea un array de números del 1 al 200
  let numeros = [];
  for (let i = 1; i <= 200; i++) {
    numeros.push(i);
  }
  
  // Se obtienen los elementos del DOM necesarios
  var opcionesSelect = document.getElementById('opciones');
  var inputHabilitado = document.getElementById('numeroInput');
  var resultadoLista = document.getElementById('resultadoLista');
  var formParImpar = document.getElementById('formParImpar');

  // Se agrega un evento para detectar cambios en el selector de opciones
  opcionesSelect.addEventListener('change', function() {
    var seleccion = opcionesSelect.value;
    inputHabilitado.disabled = seleccion === 'paresmax' || seleccion === 'imparesmax' ? false : true;
    inputHabilitado.value = '';
  });

  // Se agrega un evento al botón de ver para realizar la operación según la opción seleccionada
  document.getElementById('verBtn').addEventListener('click', () => {
    var seleccion = document.getElementById('opciones').value;
    var inputValue = parseInt(document.getElementById('numeroInput').value);

    // Se ejecuta la operación según la opción seleccionada
    if (seleccion === 'pares') {
      // Se filtran los números pares, se invierte el orden y se crea un array con los resultados formateados
      let pares = numeros.filter(num => num % 2 === 0).reverse().map((num, index) => 'Par en la posición ' + (num - 1) + ': ' + num);
      resultadoLista.innerHTML = pares.join('<br>');
    } else if (seleccion === 'impares') {
      // Se filtran los números impares, se invierte el orden y se crea un array con los resultados formateados
      let impares = numeros.filter(num => num % 2 !== 0).reverse().map((num, index) => 'Impar en la posición ' + (num - 1) + ': ' + num);
      resultadoLista.innerHTML = impares.join('<br>');
    } else if (seleccion === 'paresmax') {
      // Se verifica que el valor del input sea un número válido y se encuentra entre 0 y 200
      if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 200) {
        // Se filtran los números pares mayores al valor del input, se invierte el orden y se crea un array con los resultados formateados
        let paresMax = numeros.filter(num => num % 2 === 0 && num > inputValue).reverse().map((num, index) => 'Par mayor a ' + inputValue + ' en la posición ' + (num - 1) + ': ' + num);
        resultadoLista.innerHTML = paresMax.join('<br>');
      } else {
        alert('Por favor, ingresa un número válido (entre 0 y 200) para la opción "Pares Mayores".');
      }
    } else if (seleccion === 'imparesmax') {
      // Se verifica que el valor del input sea un número válido y se encuentra entre 0 y 200
      if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 200) {
        // Se filtran los números impares mayores al valor del input, se invierte el orden y se crea un array con los resultados formateados
        let imparesMax = numeros.filter(num => num % 2 !== 0 && num > inputValue).reverse().map((num, index) => 'Impar mayor a ' + inputValue + ' en la posición ' + (num - 1) + ': ' + num);
        resultadoLista.innerHTML = imparesMax.join('<br>');
      } else {
        alert('Por favor, ingresa un número válido (entre 0 y 200) para la opción "Impares Mayores".');
      }
    } else {
      alert('Por favor, selecciona una opción válida');
    }
  });
});