const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
//Request con JQuery
//const  lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true };

function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    //$.get llama al callback 
    $.get(url, opts, callback).fail(() => {
        console.log(`Sucedio un error. No se pudo obtener el ${id}`)
    }) 
}

// Una forma de garantizar el orden es de esta manera
//Se obtienen en serie y no en paralelo y se garantiza el orden
obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)
            })
        })
    })
})

//Aqui se aplica el asincronismo, ya que la respuesta puede llegar 
//en cualquier orden. Eso depende ya del servidor.
/* obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4); */