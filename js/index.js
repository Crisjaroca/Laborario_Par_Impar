//Asignación de valores al array
let numeros = [];
for (let i = 0; i < 200; i++) {
  numeros[i] = i+1;
}
//numeros impares
function impares(numeros){
  let impares = numeros.filter(x => x % 2 !== 0).length
  return impares
}


//numero pares
function pares(numeros){
  let pares = numeros.filter(x => x % 2 === 0).length
  return pares
}

//datos del selector
const seleccion = document.getElementById('opcionesSelect')
alert(seleccion)
function selector(){

}



//mostrar datos
document.getElementById('VerBtn').addEventListener('click' , ()=>{

if (seleccion == 0) {
  
} else {
  
  
}

})
