// Capitulo 2
// 1 - Ciclo de un triángulo
let triangulo = '#######';
let auxiliar = "";
for(let i = 0; i < triangulo.length; i++){
    auxiliar = triangulo[i] + auxiliar;
    console.log(auxiliar);
}

// 2 - FizzBuzz
let limiteDos = 35;
for(let i = 1; i <= limiteDos; i++){
    if(i % 3 == 0 &&  i % 5 == 0){
        console.log('FizzBuzz');
        continue;
    }else if(i % 3 == 0){
        console.log('Fizz');
        continue;
    }else if( i % 5 == 0){
        console.log('Buzz');
        continue;
    }else console.log(i);
}

// 3 - Tablero de ajedrez
let auxiliarTres = '';
let limiteTres = 8;
for(let i = 0; i < limiteTres; i++){
  auxiliarTres = '# ';
  if(i % 2 == 0){
  	auxiliarTres = ' #';
  	console.log('\n'+auxiliarTres.repeat(limiteTres/2)); 
  }else{
    console.log('\n'+auxiliarTres.repeat(limiteTres/2)); 
  }
}

let pizarra = '';
let limitePizarra = 8;
for(let i = 0; i < limitePizarra.length;i++){
    for(let j = 0; j < limitePizarra.length;j++){
        if((i+j)%2 == 0){
            pizarra = ' ';
        }else{
            pizarra += '#';
        }
        pizarra += '\n';
    }
}
console.log(pizarra);

