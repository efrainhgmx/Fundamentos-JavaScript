var martin = {
    nombre: 'Martín Lopez',
    edad: 25,
    altura: 1.75
};

var dario = {
    nombre: 'Dario Lujan',
    edad: 27,
    altura: 1.85,
    cantidadDeLibros: 100
};

var paula = {
    nombre: 'Paula Bedolla',
    edad: 22,
    altura: 1.65,
    cantidadDeLibros: 78,
};

var martha = {
    nombre: 'Martha Gomez',
    edad: 25,
    altura: 1.52,
    cantidadDeLibros: 132
};

const pasarAlturaAcms = persona => ({
    ...persona,
    altura: persona.altura * 100
   /* ESTO ES LO MISMO A LO ANTERIOR
    return {
        ...persona,
        altura: persona.altura * 100
    }; */
});

var personas = [martin, dario, paula, martha];
//Map no modifica el array original, regresa un nuevo array
var personasCms = personas.map(pasarAlturaAcms);

/* var acum = 0;

for (var i = 0; i < personas.length; i++) {
    acum += personas[i].cantidadDeLibros;
} */

/* const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros;
} */

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;
var totalDeLibros = personas.reduce(reducer, 0);


console.log(`En total de libros de todos es ${totalDeLibros}`);