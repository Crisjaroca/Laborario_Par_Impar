document.addEventListener("DOMContentLoaded", function() {
  // Definición de los números
  let numeros = Array.from({ length: 200 }, (_, i) => i + 1);

  var opcionesSelect = document.getElementById('opciones');
  var inputHabilitado = document.getElementById('numeroInput');
  var resultadoLista = document.getElementById('resultadoLista');
  var formParImpar = document.getElementById('formParImpar');

  opcionesSelect.addEventListener('change', function() {
    var seleccion = opcionesSelect.value;

    if (seleccion === 'default') {
      inputHabilitado.disabled = true;
    } else if (seleccion === 'paresmax' || seleccion === 'imparesmax') {
      inputHabilitado.disabled = false;
    } else {
      inputHabilitado.disabled = true;
    }
  });

  formParImpar.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
  });

  document.getElementById('verBtn').addEventListener('click', () => {
    var seleccion = document.getElementById('opciones').value;
    var inputValue = parseInt(document.getElementById('numeroInput').value);

    if (seleccion === 'pares') {
      let pares = numeros.filter(num => num % 2 === 0).reverse().map((num, index) => `Par en la posición ${num - 1}: ${num}`);
      resultadoLista.innerHTML = pares.join('<br>');
    } else if (seleccion === 'impares') {
      let impares = numeros.filter(num => num % 2 !== 0).reverse().map((num, index) => `Impar en la posición ${num - 1}: ${num}`);
      resultadoLista.innerHTML = impares.join('<br>');
    } else if (seleccion === 'paresmax') {
      if (!isNaN(inputValue) && inputValue <= 198) {
        let paresMax = numeros.filter(num => num % 2 === 0 && num > inputValue).reverse().map((num, index) => `Par mayor a ${inputValue} en la posición ${num - 1}: ${num}`);
        resultadoLista.innerHTML = paresMax.join('<br>');
      } else {
        alert('Por favor, ingresa un número válido (máximo 198) para la opción "Pares Mayores".');
      }
    } else if (seleccion === 'imparesmax') {
      if (!isNaN(inputValue) && inputValue <= 198) {
        let imparesMax = numeros.filter(num => num % 2 !== 0 && num > inputValue).reverse().map((num, index) => `Impar mayor a ${inputValue} en la posición ${num - 1}: ${num}`);
        resultadoLista.innerHTML = imparesMax.join('<br>');
      } else {
        alert('Por favor, ingresa un número válido (máximo 198) para la opción "Impares Mayores".');
      }
    } else {
      alert('Por favor, selecciona una opción válida');
    }
  });
});
