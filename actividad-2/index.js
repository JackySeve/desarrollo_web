console.log('Hola mundo');
console.log('----------');

const edad = 55;
let nombre = 'Juan';
let apellido = 'Pardo'
const esEstudiante = false;
const altura = 1.70;
const semestre = []; //lista -> Array
const materiaPreferencia = {nombre : 'Calculo', id : 0}; //Diccionarios -> objeto -> JSON (JavaScript Object Notation)
const universidad = null;
const carrera = undefined;

console.log(typeof nombre);
console.log(typeof edad);

console.log('Conversion de string a number');
const precioMatricula = '5000000.5';
console.log(parseInt(precioMatricula));
console.log(parseFloat(precioMatricula));

console.log('----- == -----');
console.log('Doble igual: ' , '45' == 45); //VALOR
console.log('----- === -----');
console.log('Triple igual: ' , '45' === 45); //VALOR Y TIPO

console.log('---- concatenacion ----');
console.log(nombre + ' ' + apellido);
console.log(`${nombre} ${apellido}`);

console.log('---- operador ternario ----');
console.log('---- exp ? verdadero : falso ----');
console.log( edad > 18 ? 'Es mayor de edad' : 'Es menor de edad');

condition = edad > 18
if (condition) { }
if (condition) { } else { }

const dia = 'LUNES'
switch (dia) {
    case 'LUNES':
        console.log('LUNES');
        break;
    case 'MARTES':
        console.log('MARTES');
        break;
    default:
        console.log('NO ES VALIDO');
        break;
}

console.log('-- FUNCIONES --');
//funcion clasica de js
function imprimirNombre(nombre) {
    console.log(nombre);
}
//llamar la funcion 
imprimirNombre(nombre)

//funcion nombrada - array function
const imprimirNombreApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);
}
//llamar imprimirNombreApellido
imprimirNombreApellido(nombre, apellido)

const crearNombreCompleto = (nobmre, apellido) => {
    console.log('-- GLOBAL SCOPE FAKE --');
    console.log(nombre, apellido);
    let name = nombre
    if (nombre.length > 3) {
        let name = nombre[0] + ' ' + apellido
        console.log('94 ' + name);
    }
}
