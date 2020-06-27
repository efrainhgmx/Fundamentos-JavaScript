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

console.log(personasCms);