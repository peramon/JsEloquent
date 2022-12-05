// Capitulo 3
// 1 - MINIMO
// Escribe una función min que tome dos argumentos y retorne su mínimo.

let min = (num1,num2) => {
    if(num1 <= num2) return num1;
    else return num2;
};

console.log(min(0, 10));
console.log(min(0, -10));

// 2 - RECURSION
/*Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar 
usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número 
entero positivo es par o impar:
Zero es par.
Uno es impar.
Para cualquier otro número N, su paridad es la misma que N - 2.
Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar 
un solo parámetro (un número entero, positivo) y devolver un Booleano. */

function esPar(numero){
    if(numero == 0) return true;
    else if(numero == 1 || numero < 0) return false;
    else return esPar(numero-2);
}

console.log(esPar(50));
console.log(esPar(75));
console.log(esPar(-1));

// 3 - CONTEO DE FRIJOLES

/*Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N]. 
El valor devuelto será un string que contiene solo un carácter (por ejemplo, "f"). 
El primer carácter tiene posición cero, lo que hace que el último se encuentre en 
la posición string.length - 1. En otras palabras, un string de dos caracteres 
tiene una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.
Escribe una función contarFs que tome un string como su único argumento y devuelva un 
número que indica cuántos caracteres “F” en mayúsculas haya en el string.
Despues, escribe una función llamada contarCaracteres que se comporte como contarFs, 
excepto que toma un segundo argumento que indica el carácter que debe ser 
contado (en lugar de contar solo caracteres “F” en mayúscula). 
Reescribe contarFs para que haga uso de esta nueva función. */

let contarFs = (palabra) => {
    let contador = 0;
    for(let i = 0; i <= palabra.length-1;i++){
        if(palabra[i] == "F") contador += 1;
    }
    return contador;
};

console.log(contarFs("FFC"));

function contarCaracteres(palabra, letra){
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if(palabra[i] == letra) contador += 1;
    }
    return contador;
}

console.log(contarCaracteres("kakkerlak", "k"));