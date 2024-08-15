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

// ----- Operadores Booleanos ----- 

// en JS cualquier valor puede ser evaluado como verdadero o falso. 

let bool1 = 3 > 2; //true; // utilizamos los operadores binarios < >
let bool2 = 2 > 3; // false


console.log("Granate" != "Rubí")
// → true
console.log("Perla" == "Amatista")
// → false

// ----- Operadores Lógicos ----- 

// "significa Y" los 2 valores tienen que cumplirse para ser verdadero
console.log(true && false)
// → false
console.log(true && true)
// → true


// significa "O" es verdadero si uno de los valores es verdadero
console.log(false || true)
// → true
console.log(false || false)
// → false

// Operador ternario "?"- a ? b : c si el resultado es b cuando es verdadero y c cuando es falso

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

// ------ Coerción de tipos ------- 

// cuando se le da un valor incorrecto a javascript este tratará de convertirlo para hacer la operación efectiva (a veces hace cosas extrañas)

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

// Cuando se aplica un operador al tipo de valor “incorrecto”, JavaScript convertirá silenciosamente ese valor al tipo que necesita, utilizando un conjunto de reglas que a menudo no son las que deseas o esperas. Esto se llama coerción de tipos. El null en la primera expresión se convierte en 0 y el "5" en la segunda expresión se convierte en 5 (de cadena a número). Sin embargo, en la tercera expresión, + intenta la concatenación de cadenas antes que la suma numérica, por lo que el 1 se convierte en "1" (de número a cadena)

// para evitar coerción de tipos no deseadas utilizamos === o !==

let exacIg = 1 === 1; // true - prueba si el valor y el tipo es igual al otro. 
let noExacIg = 1 !== 2 // true - prueba si el valor no es exactamente igual; 

// operador "|| devolverá el valor de su izquierda cuando ese valor pueda convertirse en true y devolverá el valor de su derecha de lo contrario."
// devuelve el valor de la derecha solo si el de la izquierda es null o undefined
console.log(null || "usuario")
// → usuario
console.log("Agnes" || "usuario")
// → Agnes

