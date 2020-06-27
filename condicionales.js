var carlos = {
    nombre: 'Carlos',
    apellido: 'Espinosa',
    edad: 24,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: true
};

var diana = {
    nombre: 'Diana',
    apellido: 'Fereo',
    edad: 17
};

function imprimirProfesion(persona) {
    console.log(`${persona.nombre} es:`);

    if (persona.ingeniero) {
        console.log('Ingeniero');
    }
    
    if (persona.cocinero) {
        console.log('Cocinero');
    }

    if (persona.cantante) {
        console.log('Cantante');
    }

    if (persona.dj) {
        console.log('DJ');
    }
}

//Arrow functions es otra manera de usar funiones
var esMayordeEdad = function(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log('No es mayor de edad');
    }
}

//Esta es la misma manera de hacer la funcion anterios
const esMayordeEdad = (persona) => {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log('No es mayor de edad');
    }
}

function esMayordeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log('No es mayor de edad');
    }
}

//Función que retorna valores.
const MAYORIA_DE_EDAD = 18;
function mayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

//Otra forma de hacer una función
const mayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
imprimirProfesion(carlos);
esMayordeEdad(carlos);