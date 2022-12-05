// Funciones
console.group('\nFunciones');
const cuadrado = function(x) {return x * x; }
const hacerSonido = function() { console.log("Pummmm");}
const potencia = function(base, exponente){
    let resultado = 1;
    for(let i = 0 ; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}
console.log(`El cuadrado es ` + cuadrado(2) );
hacerSonido();
console.log('El resultado de la potencia de 4 elevado a la 4 es -> ' + potencia(4,4));

console.groupEnd();

// Vinculaciones y alcances
console.group('\nVinculaciones y alcances');
let y = 3;
if(true){
    let z = 3;
    var x = 5;
}
console.log(y*x);
console.groupEnd();

// Alcance anidado
console.group('\nAlcance anidado');
const humus = function(factor){
    const ingrediente = function(cantidad, unidad, nombre){
        let cantidadIngredientes = cantidad * factor;
        if(cantidadIngredientes > 1) unidad += 's';
        console.log(`${cantidadIngredientes} ${unidad} ${nombre}`)
    }
    ingrediente(2,'lata','Pepinillos');
    ingrediente(4,'taza','Harina')
}
humus(4);
console.groupEnd;

// Funciones de Flecha
console.group('\nFunciones flecha');
let fArrow = a => {
    return a*a;
};
let value_cuadrado = 5;
console.log(`El area del cuadarado con lado ${value_cuadrado} es ` + fArrow(value_cuadrado));

let fTwoArrow = (nombre, edad) => {
    console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`);
};
fTwoArrow('Paul',24);

let fTreeArrow = () => {
    console.log('Test');
};
fTreeArrow();
console.groupEnd;


// 
console.group('\nRecursividad');
function potenciaTwo(base, exponente) {
    if (exponente == 0) {
      return 1;
    } else {
      return base * potenciaTwo(base, exponente - 1);
    }
  }
  console.log(`La potencia de 2 elevadp al 3 es: ` + potenciaTwo(2, 3));

  function encontrarSolucion(objetivo) { // Analizar
    function encontrar(actual, historia) {
      if (actual == objetivo) {
        return historia;
      } else if (actual > objetivo) {
        return null;
      } else {
        return encontrar(actual + 5, `(${historia} + 5)`) ||
               encontrar(actual * 3, `(${historia} * 3)`);
      }
    }
    return encontrar(1, "1");
  }
  
  console.log(encontrarSolucion(13));
console.groupEnd;