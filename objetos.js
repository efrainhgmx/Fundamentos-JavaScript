//Objeto
var carlos = {
    nombre: 'Carlos',
    apellido: 'Martinez',
    edad: 22
};

var noemi = {
    nombre: 'Noemi',
    apellido: 'Gomez',
    edad: 27
};

// Una manera de solo poner las propiedades del objeto
function imprimirNombreEnMayusculas ({nombre, edad}) {
    //Formas de destructurar objetos.
    // var nombre = persona.nombre es lo mismo a:
    // var { nombre } = persona

    console.log(nombre.toUpperCase());
    console.log(edad);
}

imprimirNombreEnMayusculas(carlos);
imprimirNombreEnMayusculas(noemi);
//forma de crear un objeto con los parametros establecidos.
imprimirNombreEnMayusculas({nombre: 'Pepe', edad: 30});

//Reto

function imprimirNombreyEdad({nombre, edad}) {
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreyEdad(carlos);
imprimirNombreyEdad(noemi);


function cumpleanos(persona) {
    //Nos devuelve un nuevo "objeto" sin modificar el objeto original
    return {
        ...persona,
        edad: persona.edad + 1;
    }
    //JS modifica el objeto cuando se pasa como referencia
    persona.edad += 1;
}