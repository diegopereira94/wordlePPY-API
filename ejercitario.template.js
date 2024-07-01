/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */

//Crea una variable numero y asígnale un valor de tipo number y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfNumber() {
  let numero = 12;
  console.log(numero, typeof number);
}

//Crea una variable texto y asígnale un valor de tipo string y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfString() {}
//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfBooleanTrue() {}

//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.

function typeOfBooleanFalse() {}
//Crea una variable nulo y asígnale un valor de tipo null y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfNull() {}
//Crea una variable indefinido y asígnale un valor de tipo undefined y luego imprime en la consola el valor de la variable y el tipo de dato que almacena.
function typeOfUndefined() {}
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos y luego imprime en la consola el arreglo y el tipo de dato que almacena.
function typeOfArray() {}

/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es *"mayor", *"menor" o *"igual" a 10.
function mayorMenorIgual(num) {}

//Escribe un programa que tome un número como parámetro e imprima en la consola si es *"par" o *"impar".
function isPar(num) {}

//Escribe un programa que tome una letra como parámetro e imprima en la consola si es una *"vocal" o una *"consonante".
function isVocal(letra) {}

//Escribe un programa que tome una edad como parámetro e imprima en la consola *"mayor de edad" o *"menor de edad".
function mayorMenorEdad(edad) {}

//Escribe un programa que tome un número del 1 al 7 como parámetro y muestre un mensaje en la consola indicando el día de la semana correspondiente.*"Los dias de la semana deben estas escritos de la siguiente manera Lunes, Martes, Miercoles..."
function diaDeLaSemana(num) {}

//Funciones

//Escribe una función que tome dos números como argumentos y devuelva (return) su suma.
function suma(num1, num2) {}
//Escribe una función que tome un número como argumento y devuelva (return) true si es par o false si es impar.
function isParBolean(num) {}

//Escribe una función que tome un array de números como argumento y devuelva (return) la suma de sus elementos.
function sumaArray(array) {}

//Escribe una función que tome un array de strings como argumento y devuelva (return) la longitud del string más largo.
function longitudMasLargo(array) {}

//Vectores

//Escribe una función que tome un array de números como argumento y devuelva (return) el número más grande.
function numeroMasGrande(array) {}

//Escribe una función que tome un array de números como argumento y devuelva (return) un array con los números ordenados de menor a mayor.
function ordenarArray(array) {}
//Escribe una función que tome dos arrays como argumentos y devuelva (return) un array que contenga los elementos comunes entre ambos.
function elementosComunes(array1, array2) {}
//Escribe una función que tome un array de strings como argumento y devuelva (return) un nuevo array que contenga los strings convertidos a mayúsculas.
function stringsMayusculas(array) {}
//Escribe una función que tome un array de números como argumento y devuelva (return) un nuevo array que contenga la suma acumulativa de sus elementos.
function sumaAcumulativa(array) {}

//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.*"debe imprimir solo el numero"
function imprimirFor() {}

//Escribe un bucle while que imprima en la consola los números del 1 al 5.*"debe imprimir solo el numero"
function imprimirWhile() {}
//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.*"debe imprimir solo el numero"
function imprimirArray(array) {}

//Crea una función que reciba un número n y devuelva (return) la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola. *"debe imprimir solo el numero"
function sumaAcumulada(n) {}

//Crea una función que reciba un vector y devuelva (return) la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.*"debe imprimir solo el numero"
function sumaWhile(array) {}

module.exports = {
  typeOfString,
  typeOfNumber,
  typeOfBooleanTrue,
  typeOfBooleanFalse,
  typeOfNull,
  typeOfUndefined,
  typeOfArray,
  mayorMenorIgual,
  isPar,
  isVocal,
  mayorMenorEdad,
  diaDeLaSemana,
  suma,
  isParBolean,
  sumaArray,
  longitudMasLargo,
  elementosComunes,
  ordenarArray,
  numeroMasGrande,
  stringsMayusculas,
  sumaAcumulativa,
  imprimirFor,
  imprimirWhile,
  imprimirArray,
  sumaAcumulada,
  sumaWhile,
};