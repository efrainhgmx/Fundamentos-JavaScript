var martin = {
    nombre: 'Martín Lopez',
    edad: 25
};

var dario = {
    nombre: 'Dario Lujan',
    edad: 27
};

var paula = {
    nombre: 'Paula Bedolla',
    edad: 22
};

var martha = {
    nombre: 'Martha Gomez',
    edad: 25
};

var personas = [martin, dario, paula, martha];

for(var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
}