// VARIABLES
console.group('VARIABLES');
// Enteros
console.log('\nEnteros');
let numeroEntero = 13;
let numeroNegativo = -20;
let numeroFraccionario = 12.3;

console.log('El numero entero es -> ' + numeroEntero
    + '\nEl numero negativo es ->' + numeroNegativo + '\nEl numero decimal es ->' + numeroFraccionario);
console.log('13%5- > ' + 13%5);
console.log('\nCadenas');
let cadena = '!Esta es una cadena \t verdad!';
let cadenaDos = '\nEsto es un salto de linea -> \\n';
let plantillaLiteral = `Hola, mi edad es ${28-4}`;

console.log(cadena+cadenaDos)
console.log(plantillaLiteral)
console.groupEnd();

// Typeof -> Operador unario
console.group('\nTypeof');
console.log(typeof 4);
console.groupEnd();

// Booleano
console.group('\nBooleano');
console.log(3 > 4);
console.log('Q' > 'q');
console.log('QASSA' > 'q');
console.log('a' > 'q');
console.log('s' > 'q');
console.log('Q' > 'A');
console.groupEnd();

// Operadores Logicos
// ! -> Operador unario
console.group('\nOperadores Logicos');
console.log(true && true);
console.log(true && false);
console.log(false || true);
console.log(!true);
// ?: -> Operador ternario
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.groupEnd();

// Conversion de tipo automatica
console.group('\nConversion de tipo automatica');
console.log(8 * null);
console.log("8" - 1);
console.log("8" + 1);
console.log("cinco" - 1);
// 0,NaN,"" -> Cuentan como false
console.log(false == 0);
console.log(null == undefined); // -> Valores vacios
console.log(null != 0);
console.groupEnd();

// Corto circuito de operadores lógicos
console.group('\nCorto circuito de operadores lógicos');
console.log( null || 'Paul');
console.log('Ramon' || 'Perez')
console.log( null && 'Paul');
console.log('Ramon' && 'Perez')
console.log(false && 'Perez')
console.groupEnd();

