// EXPRESIONES Y DECLARACIONES
console.log('\nEXPRESIONES Y DECLARACIONES');

// Vinculaciones, funciones, entorno
console.group('\nVinculaciones');
let deuda = 120;
let pago = 15;
deuda = deuda -pago;
console.log(deuda);   
// Funcion propiadel lenguaje -> prompt('Introducir valor');    No se usa mucho hoy en dia
console.log(Math.max(2,4,5,1,3,8,1,23)); // Devuelve el numero mayor
console.log(Math.min(2,4,6,7,1,3) + 100);
console.groupEnd();

// Ciclos while y do
console.group('\nCiclos while y do');
let numero = 0;
while(numero < 100){
    numero += 25;
    console.log(numero);
}

let resultado = 1;
let cont = 0;
while(cont <10){
    resultado = resultado * 2;
    cont++;
}
console.log(resultado);

/*let tuNombre
do {
    tuNombre = prompt('Quien eres');
} while(!tuNombre.includes('a'));
console.log(tuNombre);*/

for(let numero = 50; numero <= 100; numero+=25){
    console.log(numero);
}

for(let actual=20;;actual++){
    if(actual % 7==0){
        console.log(actual);
        break;
    }
}

console.groupEnd();
// Switch
console.group('\nSwitch');
let op = 1;
let resultadoSwitch = "";
switch(op){
    case 1:
        resultadoSwitch = "Opcion 1";
        break;
    case 2:
        resultadoSwitch = "Opcion 2";
        break;
    default:
        resultadoSwitch = "Ninguna opcion";
}
console.log(resultadoSwitch);
console.groupEnd();

