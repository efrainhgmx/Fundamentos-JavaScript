var martin = {
    nombre: 'Martín Lopez',
    edad: 25,
    altura: 1.75
};

var dario = {
    nombre: 'Dario Lujan',
    edad: 27,
    altura: 1.85
};

var paula = {
    nombre: 'Paula Bedolla',
    edad: 22,
    altura: 1.65
};

var martha = {
    nombre: 'Martha Gomez',
    edad: 25,
    altura: 1.52
};

const esAlta = persona => persona.altura > 1.7;
const esBaja = persona => persona.altura < 1.7;


var personas = [martin, dario, paula, martha];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);