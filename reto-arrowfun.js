var martha = {
    nombre: 'Martha',
    edad: 17
};

var monica = {
    nombre: 'Monica',
    edad: 21
};

const MAYORIA_DE_EDAD = 18;

const esMayordeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;
const esMenordeEdad = ({edad}) => edad < MAYORIA_DE_EDAD;

function permitirAcceso(persona) {
    if(!esMayordeEdad(persona)) {
        console.log('Acceso denegado');
    } else if(esMayordeEdad(persona)) {
        console.log('Acesso permitido');
    }
}

permitirAcceso(monica);
permitirAcceso(martha);