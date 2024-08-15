// ------ Números -------


let num = 13 // números
// todos los valores son bits. en este caso la combinación de bits representan el número 13.
let numFracc = 12.5 // números fraccionarios separados por puntos. 
// importante tratarlos como aproximaciones y no valores precisos. 

let sum = 1 + 1;
let rest = 1 - 1;
let div = 2 / 1; 
let mult = 2 * 2;

let residuo = 8 % 2; // llamado residuo o módulo

let infin = infinity;
let negInf = -infinity; //no son tan exactos los cálculos

let notANumber = NaN; //


// ------ Strings -------

let cad1 = `En el mar`;
let cad2 = "Acostado en el océano";
let cad3 = 'Flotando en el océano'

let saltoDeLinea = "Esta es la primera linea \nY esta la segunda"; 
let tabu = "con la t hacemos tab \t";

let concat = saltoDeLinea + " " + tabu;
console.log(concat);

//podemos hacer uso de template literals para incluir variables o operaciones dentro de una cadena
let templateLit = `la mitad de 100 es ${100 / 2}`

