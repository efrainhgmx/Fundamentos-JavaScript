const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
//Request con JQuery
//const  lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true };

function obtenerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    //$.get llama al callback 
    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`);
        
        if (callback) {
            callback();
        }
    })
}

// Una forma de garantizar el orden es de esta manera
//Se obtienen en serie y no en paralelo y se garantiza el orden
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4)
        })
    })
})

//Aqui se aplica el asincronismo, ya que la respuesta puede llegar 
//en cualquier orden. Eso depende ya del servidor.
/* obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4); */