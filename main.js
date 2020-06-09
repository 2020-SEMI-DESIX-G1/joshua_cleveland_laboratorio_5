/*
Declarar dos variables con la palabra reservada "var", 
imprimir el resultado de las operaciones de "Suma", 
"Resta", "Multiplicación" y "División" en la consola. 
Las variables pueden ser estáticas.
*/

var val1=12233,
    val2=76382;

console.log(val1+val2);
console.log(val1-val2);
console.log(val1*val2);
console.log(val1/val2);


/*
Declarar dos variables con la palabra reservada "let", 
imprimir la concatenación de ellas.
*/

let nombre='Joshua';
let edad=26;
console.log(nombre+' tiene una edad de '+edad+' años.');
console.log(nombre.concat(' tiene '.concat(edad)));

/*
Declarar dos variables con la palabra reservada "const",
imprimir cuál es el tipo de dato de esa variable.
*/

const pi=3.1416;
try{
    pi = 1000;
}catch(e){
    console.log('Error: '+e.message);
}

console.log(typeof pi);

/*
Declarar una variable tipo Objecto, colocar 4 llaves 
dentro de él que contengan un entero, un string, 
un booleano y un objeto vacío, en ese mismo orden.
*/

let myobj={
    nombre:'joshua',
    edad:26,
    casado:false,
    vivienda: null
}

console.log(myobj);