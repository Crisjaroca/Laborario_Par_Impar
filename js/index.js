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
    if (seleccion === 'paresmax' || seleccion === 'imparesmax') {
      inputHabilitado.style.display = 'block';
      textoMayores.style.display = 'block';
    } else {
      inputHabilitado.style.display = 'none';
      textoMayores.style.display = 'none';
    }
    inputHabilitado.value = '';
  });

  // Se agrega un evento al botón de ver para realizar la operación según la opción seleccionada
  document.getElementById('verBtn').addEventListener('click', () => {
    var seleccion = document.getElementById('opciones').value;
    var inputValue = parseInt(document.getElementById('numeroInput').value);

    // Se ejecuta la operación según la opción seleccionada
    if (seleccion === 'pares') {
      let pares = numeros.filter(num => num % 2 === 0).reverse().map((num, index) => 'Par en la posición ' + (num - 1) + ': ' + num);
      resultadoLista.innerHTML = pares.join('<br>');
    } else if (seleccion === 'impares') {
      let impares = numeros.filter(num => num % 2 !== 0).reverse().map((num, index) => 'Impar en la posición ' + (num - 1) + ': ' + num);
      resultadoLista.innerHTML = impares.join('<br>');
    } else if (seleccion === 'paresmax') {
      if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 200) {
        let paresMax = numeros.filter(num => num % 2 === 0 && num > inputValue).reverse().map((num, index) => 'Par mayor a ' + inputValue + ' en la posición ' + (num - 1) + ': ' + num);
        resultadoLista.innerHTML = paresMax.join('<br>');
      } else {
        alert('Por favor, ingresa un número válido (entre 0 y 200) para la opción "Pares Mayores".');
      }
    } else if (seleccion === 'imparesmax') {
      if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 200) {
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