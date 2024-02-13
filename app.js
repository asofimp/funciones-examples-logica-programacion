let listaGenrica = [];
let numero1 =0;
let intentos=0, sumaNumeros = 0;
let total=0, numeroUsuario, numerosIngresados=[];
let lenguajesProgramacion = [
    'Javascript',
    'C',
    'C++',
    'Kotlin',
    'Python'
];

//agrega los lenguajes a el arreglo
lenguajesProgramacion.push('Java', 'Ruby', 'GoLand')

//muestraa las funciones en consola
inicio();
muestraConsola();

//muestra el texto en pantalla
function textoMostrar (elemento, texto){
    let textoEscribir = document.querySelector(elemento)
    textoEscribir.innerHTML = texto; 
    return;
}

//muestra los programas de programacion en orden alreves y normal
function muestraConsola(){
    console.log(lenguajesProgramacion);
    console.log(lenguajesProgramacion.reverse());
    return;
}



//captura los numeros y los suma
function suma(){
    numeroUsuario = parseInt(document.getElementById('ingresar').value);
    numerosIngresados.push(numeroUsuario);
    intentos++;
    sumaNumeros += numeroUsuario;
    
    //ayuda a limpiar el input
    if(intentos!= 0){
        limpiar();
    }
    console.log(intentos)
    console.log(numerosIngresados)
    return;
}

//limpia en input
function limpiar(){
    document.getElementById('ingresar').value = '';
}


//calcula el promedio
function calculo(){
    total = sumaNumeros/intentos;
    textoMostrar('label', `El promedio es: ${total} `)
    console.log(numerosIngresados)
    valorNumeros()
    return;
}

//muestra los textos iniciales
function inicio(){
    textoMostrar('h1','Promedio');
    textoMostrar('label','Ingresar numeros:');
    return
}

//numeros mayores y menores
function valorNumeros(){
    let mayor=0, menor=0;
    mayor = numerosIngresados[0];
    menor = numerosIngresados[0];
  
    for (let i = 1; i < numerosIngresados.length; i++) {
      if (numerosIngresados[i] > mayor) {
        mayor = numerosIngresados[i];
      }
      if (numerosIngresados[i] < menor) {
        menor = numerosIngresados[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);

    return;
}