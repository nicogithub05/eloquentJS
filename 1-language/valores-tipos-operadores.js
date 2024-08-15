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

// ----- Operadores  Unarios _----- 
// actúan sobre un solo operando

let una1 = typeof 5;
console.log(una1); // Number

let una2 = typeof "hola";
console.log(una2) // string

let incre = 6;
console.log(incre++);

let decre = 7; 
console.log(decre--)

let negLog = true; 
let negFals = !negLog; //false 
// invierte el valor booleano de su operando

let positivo = 3;
let negativo = -positivo; // negativo ahora es -3

// en JS cualquier valor puede ser evaluado como verdadero o falso. 







